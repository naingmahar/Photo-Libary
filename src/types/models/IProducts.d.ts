import { IDefaultFormat } from "./ILogin";


export interface ICreateProduct{
    name : string,
    description :string,
    price : string,
    images:string[],
    shop_id:string,
    additionalinfo:string,
    category_id:string,
    qty:string,
    delivery_method_id:string
}
export interface IProduct {
    id: number
    name: string
    description: string
    created_at: string
    updated_at: string
    price: number
    imagesUrl: ImagesUrl[]
    images: string[]
    additionalinfo: any
    category_id: number
    category_name: string
    shop_id: number
    shop_name: string
    delivery_method_id: number
    delivery_method: string
}

export interface ImagesUrl {
    name: string
    url: string
    mime: string
  }

export type TProductRes = IDefaultFormat<IProduct>
export type TAllProductRes = IDefaultFormat<IProduct[]>