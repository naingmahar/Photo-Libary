import { IPagination } from "../../types/models/IOrderRes";
import { ICreateProduct, IProduct, TProductRes } from "../../types/models/IProducts";
import { instance } from "./config/Instance";
import { END_POINT } from "./config/endpoint";


export const fetchCreateProduct = (data:ICreateProduct):Promise<TProductRes> => {
    return instance.post(END_POINT.create_new_product,data)
}


export const fetchUpdateProduct = (id:string,data:ICreateProduct):Promise<TProductRes> => {
    return instance.put(`${END_POINT.create_new_product}/${id}`,data)
}


export const fetchGetAllProducts = async ({shopId,page}:{shopId:number,page?:number}):Promise<IPagination<IProduct>> => {
    let res = await instance.get(END_POINT.auth_user_products+`/${shopId}?page=${page||1}`);
    return res.data
}

export const fetchAuthUserProducts = async (page?:number):Promise<IProduct[]> => {
    let res = await instance.get(END_POINT.auth_user_products+`?page=${page||1}`);
    return res.data
}