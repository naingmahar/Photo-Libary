import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchAuthUserShop, fetchCreateShop, fetchSubdomainShop, fetchUpdateShop } from "../../apiClient/Shop";
import { ICreateShop, TCreateShopRes } from "../../../types/models/ICreateShop";
import { STORAGE_KEY, Storage } from "../../storage/localstorage";

const QUERY_KEY = ['Shops'];


export const useGetAuthShop = () => {
  return useQuery({
    queryKey:QUERY_KEY,
    queryFn:()=>fetchAuthUserShop()
  });
};

export const useGetDomainShop = (subdomain:string) => {
  return useQuery({
    queryKey:QUERY_KEY,
    queryFn:()=>fetchSubdomainShop(subdomain)
  });
};

export const useCreateShop = () => {
  return useMutation<TCreateShopRes, Error, ICreateShop>(fetchCreateShop,{
    onSuccess(data) {
      Storage.setItemByObjectOrArray(STORAGE_KEY.shop,data.data);
    },
  });
};

export const useUpdateShop = () => {
  return useMutation<TCreateShopRes, Error,{id:string|number,data:ICreateShop} >(fetchUpdateShop,{
    onSuccess(data) {
      Storage.setItemByObjectOrArray(STORAGE_KEY.shop,data.data);
    },
  });
};