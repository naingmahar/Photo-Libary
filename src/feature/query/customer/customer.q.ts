import { useMutation } from "@tanstack/react-query";
import { TAllCustomer } from "../../../types/models/ICustomer";
import { fetchAllCustomer } from "../../apiClient/Customer";

export const useGetAllCustomers = () => {
    return useMutation<TAllCustomer, Error>(fetchAllCustomer);
};