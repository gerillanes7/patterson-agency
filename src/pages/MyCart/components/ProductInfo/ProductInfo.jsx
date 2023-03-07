import styles from './productInfo.module.scss'

import { AiFillDelete } from 'react-icons/ai'

const ProductInfo = ({ image, name, price, onDelete }) => {
    return (
        <div className={styles.productInfoContainer}>
            <img src={image}/>
            <span>{name}</span>
            <span>{price}</span>
            <div className={styles.deleteProduct}>
                <AiFillDelete size={24} onClick={onDelete}/>
            </div>
        </div>
    )
}

export default ProductInfo;