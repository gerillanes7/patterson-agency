import Navbar from "../Navbar/Navbar"
import styles from './layout.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className={styles.container}>{children}</main>
        </>
    )
}

export default Layout;