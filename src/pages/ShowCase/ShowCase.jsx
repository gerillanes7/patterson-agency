import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useGetAllProducts } from "../../hooks/useProducts/useProducts";
import { useCartStore } from "../../stores/cartStore/cartStore";

import styles from './showcase.module.scss';

const ShowCase = () => {

    const { data: products, isLoading, isError } = useGetAllProducts();

    const { addNewProduct, myProducts } = useCartStore()

    const addNewProductToCart = (product) => {
        if (!myProducts.includes(product)) {
            addNewProduct(product)
        }
    }

    if (isLoading) {
        return <div>loading...</div>
    }

    if (isError) {
        return <div>error..</div>
    }

    return (
        <>
            <div className={styles.container}>
                <h1>Productos destacados</h1>
                <h3>Todos los productos / Cocina / Productos Destacados</h3>
            </div>
            <div className={styles.productsContainer}>
                {
                    products?.map(product => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            name={product.title}
                            price={product.price}
                            rating={product.rating.rate}
                            onClick={() => addNewProductToCart(product)}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ShowCase;