import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";
import { useFormik } from "formik";
import { TOKEN_VALUE, useUrls } from "../useUrls";
import { LoginSchema, RegisterSchema, RegisterShopSchema } from "../schema/auth";
import { errorToast, successToast } from "../../components/common/CustomToast";
import { useNavigate } from "react-router";
import { useGlobalState } from "../../components/common/store";

// Login a user

export const useLogin = () => {
   const navigate = useNavigate();
   const { loginUrl } = useUrls();
   const queryClient = useQueryClient();
   const { mutate, isLoading } = useMutation((payload) => {
     return axiosInstance.post(loginUrl, payload);
   });
 
   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validateOnBlur: false,
      validateOnChange: true,
      validationSchema: LoginSchema,
      onSubmit: async (values) => {
         try {
            const castedValues = LoginSchema.cast(values);
            mutate(castedValues, {
               onSuccess: async (res) => {
                 localStorage.setItem(TOKEN_VALUE, res.data.accessToken);
                  axiosInstance.defaults.headers.common.Authorization =
                     res.data.accessToken;
                  queryClient.setQueryData(["user"], res.response);
                  successToast({
                     message: "Logged in successfully",
                     position: "bottom-left",
                  });
                  navigate('/')
               },
               onError:  async (res) => {
                  errorToast({
                   message: `${
                     res?.response?.data?.message ?? "Invalid Credentials"
                   }`,
                   position: "bottom-left",
                 });
               },
             });     
         } catch (error) {
            throw new Error(error);
         }
      },
   });
 
   return { formik, isLoading };
};

export const useRegisterSeller = () => {
   const [Auth] = useGlobalState('Auth')
   const navigate = useNavigate();
   const { registerUrl } = useUrls();
   const queryClient = useQueryClient();
   const { mutate, isLoading } = useMutation((payload) => {
     return axiosInstance.post(registerUrl, payload);
   });
 
   const formik = useFormik({
      initialValues: {
         firstname : "",
         lastname : "",
         email: "",
         password: "",
         confirmPassword : "",
         role : 'Buyer',
         shopName : "",
         shopAddress : ""
      },
      validateOnBlur: false,
      validateOnChange: true,
      validationSchema: RegisterShopSchema,
      onSubmit: async (values) => {
         try {
            const castedValues = RegisterSchema.cast(values);
            mutate(castedValues, {
               onSuccess: async (res) => {
                 localStorage.setItem(TOKEN_VALUE, res.data.accessToken);
                  axiosInstance.defaults.headers.common.Authorization =
                     res.data.accessToken;
                  queryClient.setQueryData(["user"], res.response);
                  successToast({
                     message: "Registration successfully",
                     position: "bottom-left",
                  });
                  localStorage.setItem('user', 'buyer')
                  navigate('/')
               },
               onError:  async (res) => {
                  errorToast({
                     message: `${
                        res?.response?.data?.message ??
                       "Something went wrong, please try again later"
                     }`,
                     position: "bottom-left",
                  });
               },
             });     
         } catch (error) {
            throw new Error(error);
         }
      },
   });
 
   return { formik, isLoading };
};

export const useRegister = () => {
   const navigate = useNavigate();
   const { registerUrl } = useUrls();
   const queryClient = useQueryClient();
   const { mutate, isLoading } = useMutation((payload) => {
     return axiosInstance.post(registerUrl, payload);
   });
 
   const formik = useFormik({
      initialValues: {
         firstname : "",
         lastname : "",
         email: "",
         password: "",
         confirmPassword : "",
         role : 'Seller',
      },
      validateOnBlur: false,
      validateOnChange: true,
      validationSchema: RegisterSchema,
      onSubmit: async (values) => {
         try {
            const castedValues = RegisterSchema.cast(values);
            mutate(castedValues, {
               onSuccess: async (res) => {
                 localStorage.setItem(TOKEN_VALUE, res.data.accessToken);
                  axiosInstance.defaults.headers.common.Authorization =
                     res.data.accessToken;
                  queryClient.setQueryData(["user"], res.response);
                  successToast({
                     message: "Registration successfully",
                     position: "bottom-left",
                  });
                  localStorage.setItem('user', 'buyer')
                  navigate('/dashboard')
               },
               onError:  async (res) => {
                  errorToast({
                     message: `${
                        res?.response?.data?.message ??
                       "Something went wrong, please try again later"
                     }`,
                     position: "bottom-left",
                  });
               },
             });     
         } catch (error) {
            throw new Error(error);
         }
      },
   });
 
   return { formik, isLoading };
};