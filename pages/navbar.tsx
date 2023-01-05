import styles from '../styles/Navbar.module.css'

export default function NavBar() {
    return (
        <div className={styles.navFlex}>
            <div className={styles.navDiv}>
                <nav className={`${styles.navCommon} ${styles.navMain}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="https://www.linkedin.com/in/lrjcostello/">LinkedIn</a></li>
                        <li><a href="https://github.com/lolletsoc">GitHub</a></li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}
