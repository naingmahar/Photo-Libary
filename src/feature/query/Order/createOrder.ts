import { useMutation } from "@tanstack/react-query";
import { TBasicOrderRes } from "../../../types/models/IOrderRes";
import { fetchCreateOrder, fetchGetOrder, fetchUpdateOrder } from "../../apiClient/Order";
import { ICreateOrder } from "../../../types/models/IOrder";

export const useCreateOrder = () => {
    return useMutation<TBasicOrderRes, Error, ICreateOrder>(fetchCreateOrder);
};

export const useOrders = () => {
    return useMutation(fetchGetOrder);
};

export const useUpdateOrder = () => {
    return useMutation<TBasicOrderRes, Error, {id:number,data:ICreateOrder}>(fetchUpdateOrder);
};