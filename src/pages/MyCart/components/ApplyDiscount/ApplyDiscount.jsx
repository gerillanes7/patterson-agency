import { useState } from 'react';
import Button from '../../../../components/Button/Button';
import { useCartStore } from '../../../../stores/cartStore/cartStore';
import styles from './applyDiscount.module.scss'

const ApplyDiscount = () => {

    const [discount, setDiscount] = useState('')

    const { setAppliedDiscount } = useCartStore()

    const applyDiscount = () => {
        if (discount === 'DTO10') {
            setAppliedDiscount(0.1)
        }

        if (discount === 'DTO50') {
            setAppliedDiscount(0.5)
        }
    }

    return (
        <div className={styles.applyDiscountContainer}>
            <span>Codigo de descuento</span>
            <input onChange={(e) => setDiscount(e.target.value)} />
            <Button text='aplicar' onClick={applyDiscount} />
        </div>
    )
}

export default ApplyDiscount;