import { useCartStore } from '../../stores/cartStore/cartStore'

import { useNavigate } from "react-router-dom";

import cart from '../../assets/carrito.svg'
import logo from '../../assets/patterson-agency-logo.png'

import styles from './navbar.module.scss'

const Navbar = () => {

    const { myProducts, getTotalPrice } = useCartStore()
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <img src={logo} />
            <div className={styles.cartInfoContainer}>
                <div className={styles.cartInfo}>
                    <img src={cart} />
                    <div className={styles.cartIcon}>
                        <span>{myProducts.length}</span>
                    </div>
                </div>
                <div className={styles.cartPriceContainer}>
                    <span>
                        {getTotalPrice()} €
                    </span>
                    <span onClick={() => navigate('/my-cart')}>
                        Mi carrito
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Navbar;