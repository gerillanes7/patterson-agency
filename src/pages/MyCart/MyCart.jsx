import { useCartStore } from '../../stores/cartStore/cartStore';

import Button from '../../components/Button/Button';
import ProductInfo from './components/ProductInfo/ProductInfo';

import { MdArrowBackIosNew } from 'react-icons/md'

import classNames from 'classnames';

import styles from './myCart.module.scss'
import { useNavigate } from "react-router-dom";
import ApplyDiscount from './components/ApplyDiscount/ApplyDiscount';

const MyCart = () => {

    const navigate = useNavigate();

    const { myProducts, getTotalPrice, deleteProduct } = useCartStore()

    return (
        <div className={styles.myCartContainer}>
            <div className={classNames(styles.gridSection, styles.cartProductsInfo)}>
                <div className={styles.titleContainer}>
                    <h3>
                        Carrito
                    </h3>
                </div>
                <div className={styles.allProducts}>
                    {
                        myProducts?.map(product => (
                            <ProductInfo
                                key={product.id}
                                image={product.image}
                                name={product.title}
                                price={product.price}
                                onDelete={() => deleteProduct(product)} />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className={classNames(styles.gridSection, styles.cartCheckout)}>
                    <div className={styles.titleContainer}>
                        <span className={styles.quantityProductsLabel}>
                            {myProducts.length} articulos
                        </span>
                        <span className={styles.totalPriceLabel}>
                            {getTotalPrice()} €
                        </span>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button text='Finalizar Compra' disabled/>
                    </div>

                </div>
                <ApplyDiscount />
            </div>
            <div className={styles.keepBuyingContainer} onClick={() => navigate('/')}>
                <MdArrowBackIosNew />
                <span>
                    Seguir comprando
                </span>
            </div>
            <p />

        </div>
    )
}

export default MyCart;