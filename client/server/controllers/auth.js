const User = require("../models/User");
const validateRegisterUser = require("../utils/auth/register");
const validateLoginUser = require("../utils/auth/login");
const returnError = require("../utils/returnError");


// @desc    Register User
// @route   POST /api/v1/auth/register
// @access  Public

const sendTokenResponse = (data, statusCode, res) => {
   // Create token
   const token = data.user ? data.user.getSignedJwtToken() : data.getSignedJwtToken();
 
   const options = {
     expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
     httpOnly: true,
   };
 
   if (process.env.NODE_ENV === "production") {
     options.secure = true;
   }
 
   res
     .status(statusCode)
     .cookie("umecarts", token, options)
     .json({
       success: true,
       data: {
         token,
         user: data.user ? data.user : data,
       },
     });
 };
exports.register = async (req, res) => {
    try {
      const { errors, isValid } = validateRegisterUser(req.body);
      const { firstName , lastName , email , password } = req.body;
      if (!isValid) {
        return res.status(400).json({
          success: false,
          errors: { msg: "Registration failed", ...errors },
        });
      }
     const newUser = { firstName , lastName , email: email.toLowerCase(), password, provider: "email/password" , subscription : "No Subscription" };
 
     const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          success: false,
          errors: {
            msg: "User already registered!",
          },
        });
      }
     const registeredUser = await User.create(newUser);
     registeredUser.password = undefined;
     sendTokenResponse(registeredUser, 201, res);
    } catch (err) {
      return returnError(err, res, 500, "Registration failed");
    }
};

exports.login = async (req, res, next) => {
   try {
     const { errors, isValid } = validateLoginUser(req.body);
     const email = req.body.email.toLowerCase();
 
     if (!isValid) {
       return res.status(400).json({
         success: false,
         errors,
       });
     }
 
     let user = await User.findOne({ email }).select("+password");
     // let user = await User.findOne({ email, status: ACTIVE }).select('+password').populate('profile');
 
     if (!user) {
       return res.status(401).json({
         success: false,
         errors: {
           msg: "Invalid Login Credentials!",
         },
       });
     }
 
     if (user.status !== "ACTIVE") {
       return res.status(401).json({
         success: false,
         errors: {
           msg: `This user is ${user.status.toLowerCase()}. Please contact support.`,
         },
       });
     }
 
     if (user.deleted) {
       return res.status(404).json({
         success: false,
         errors: {
           msg: "This user has been deleted or does not exist",
         },
       });
     }
 
      if (user.provider !== "email/password") {
         return res.status(400).json({
            success: false,
            errors: {
              msg: "Please login with Google or Facebook",
            },
         });
      }
 
     // Check if password matches
     const isMatch = await user.matchPassword(req.body.password);
 
     if (!isMatch) {
       return res.status(401).json({
         success: false,
         errors: {
           msg: "Invalid Login Credentials",
         },
       });
     }
 
     const data = { user };
     user.password = undefined; // Remove password from user before sending response
     return sendTokenResponse(data, 200, res);
   } catch (err) {
     return returnError(err, res, 500, "Login failed");
   }
 };


 // @desc    Get current logged in user
// @route   POST /api/v1/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    if (user.status === "DISABLED") {
      return res.status(401).json({
        success: false,
        errors: {
          msg: `This user is ${user.status.toLowerCase()}. Please contact support.`,
        },
      });
    }
    const data = { user };
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    return returnError(err, res, 500, "Unable to get user");
  }
};

// @desc    Log out user or clear cookie
// @route   GET /api/v1/auth/logout
// @access  Private
exports.logout = async (req, res, next) => {
  res.cookie("cypercode", "none", {
    expires: new Date(Date.now() - 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    data: {},
  });
};