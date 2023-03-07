import { useQuery } from "react-query";

import { api } from "../../api/api";

const getAllProducts = async () => {
    try {
        const { data } = await api.get('products?limit=4')

        return data;
    } catch (e) {
        console.error(e);
    }
}

export const useGetAllProducts = () => {
    return useQuery('products', getAllProducts)
}