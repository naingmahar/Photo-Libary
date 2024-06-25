import { IDefaultFormat } from "./ILogin";

export interface ICategory {
    name:string,
    description:string
}


export type TCategoryRes = IDefaultFormat<ICategory>
export type TAllCategoryRes = IDefaultFormat<ICategory[]>