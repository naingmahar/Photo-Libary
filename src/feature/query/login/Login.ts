import {  useMutation } from "@tanstack/react-query";
import { fetchCheckEmail, fetchCreateCustomer, fetchLogin, fetchUpdateProfile, fetchVerifyOTP } from "../../apiClient/Auth";
import { IReqLogin, TCheckEmail, TLoginRes } from "../../../types/models/ILogin";
import { ICreateShop, TCreateShopRes } from "../../../types/models/ICreateShop";
import { STORAGE_KEY, Storage } from "../../storage/localstorage";
import { fetchRegister, fetchSubdomainShop } from "../../apiClient/Shop";
import { IUser, TRegister } from "../../../types/models/IRegister";
import { StoreUserInfo } from "../../storage/UserStorage";
import { ICustomer, TCustomer } from "../../../types/models/ICustomer";

export const useLogin = () => {
  return useMutation<TCreateShopRes, Error, IReqLogin>(fetchLogin,{
    onSuccess(data) {
      Storage.setItemByObjectOrArray(STORAGE_KEY.shop,data.data);
    },
  });
};

export const useRegister = () => {
  return useMutation<TRegister, Error, ICreateShop>(fetchRegister,{
    onSuccess(data) {
      Storage.setItem(STORAGE_KEY.token,data.data.token);
      StoreUserInfo(data.data.user);
    },
  });
};

export const useUpdateProfile = () => {
  return useMutation<TLoginRes, Error,{id:string|number,data:IUser} >(fetchUpdateProfile,{
    onSuccess(data) {
      StoreUserInfo(data.data)
    },
  });
};

export const useVerifyOTP = () => {
  return useMutation<TLoginRes, Error, {email:string,code:string}>(fetchVerifyOTP,{
    onSuccess(data) {
      Storage.setItemByObjectOrArray(STORAGE_KEY.shop,data.data);
    }
  });
};

export const useCheckEmail = () => {
  return useMutation<TCheckEmail, Error, {email:string}>(fetchCheckEmail);
};

export const useCheckSubdomain = () => {
  return useMutation(fetchSubdomainShop);
};


export const useCreateCustomer = () => {
  return useMutation<TCustomer, Error, ICustomer>(fetchCreateCustomer,{
    onError(error){
      console.warn("Mutate Error",error)
    },
    onSuccess(data,param) {
      Storage.setItemByObjectOrArray(STORAGE_KEY.customer,{...data,...param});
    },
  });
};