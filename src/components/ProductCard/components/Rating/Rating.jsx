import star from '../../../../assets/estrella.svg'

import styles from './rating.module.scss'

const Rating = ({ ratingNumber }) => {
    return (
        <div className={styles.ratingContainer}>
            {[...new Array(Math.round(ratingNumber))].map(_ => (
                <img src={star} />
            ))}
        </div>
    )
}
export default Rating