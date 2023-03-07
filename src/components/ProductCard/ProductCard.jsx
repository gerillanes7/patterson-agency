import Button from '../Button/Button';
import Rating from './components/Rating/Rating';
import styles from './productCard.module.scss'


const ProductCard = ({ image, price, name, rating, onClick }) => {

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src={image} />
            </div>
            <div className={styles.ratingContainer}>
                <Rating ratingNumber={rating}/>
            </div>
            <div className={styles.productInfo}>
                <p>
                    {name}
                </p>
                <p>
                    {price} €
                </p>

                <Button text='Agregar al carrito' onClick={onClick} />
            </div>
        </div>
    )
}

export default ProductCard;