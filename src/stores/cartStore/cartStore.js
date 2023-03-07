import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware'


export const useCartStore = create(persist((set, get) => ({
    myProducts: [],
    addNewProduct: (product) => set({ myProducts: [...get().myProducts, product] }),
    deleteProduct: (product) => set({ myProducts: get().myProducts.filter(p => p !== product) }),
    appliedDiscount: 0,
    setAppliedDiscount: (discount) => set({ appliedDiscount: discount}),
    getTotalPrice: () => (get().myProducts?.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0) * (1 - get().appliedDiscount)).toFixed(2),
}), { name: 'myProducts', storage: createJSONStorage(() => localStorage) }))