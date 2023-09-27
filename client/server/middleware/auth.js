const jwt = require('jsonwebtoken');

const User = require('../models/User');
// Protect routes
exports.protect = async (req, res, next) => {
   let token;
   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      // Set token from Bearer token
      token = req.headers.authorization.split(' ')[1];
   }
   try {
       // Verify token
       const decoded = jwt.verify(token, process.env.JWT_SECRET);
       req.user = await User.findById(decoded.id)
       if (!req.user){
         throw Error()
       }
       next();
    } catch (err) {
       return res.status(401).json({
           success: false,
           errors: {
               msg: 'Not authorized to access this resource'
           }
       });
   }
};

exports.authorize = (...roles) => {
   return (req, res, next) => {
       if (!roles.includes(req.user.role)) {
           return res.status(403).json({
               success: false,
               errors: {
                   msg: 'User not authorized to access resource'
               }
           });
       }
       next();
   };
};