import React, { useContext } from 'react'
import { LucideSunMedium, LucideMoon } from 'lucide-react'
import styles from "./navbar.module.scss";
import { ThemeContext } from '@/context/ThemeContext'
import { useRouter } from 'next/navigation'

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const router = useRouter()

    return (
        <div className={`${styles.navbar} ${theme === 'light' ? styles.light : styles.dark}`}>
            <div className={styles.menu}>
                <button className={styles.icon} onClick={toggleTheme}>
                    <LucideSunMedium className={`${styles.light} ${theme === 'light' ? styles.active : ''}`} />
                    <LucideMoon className={`${styles.dark} ${theme === 'dark' ? styles.active : ''}`} />
                </button>
                <ul>
                    <li onClick={() => router.push('/home')}>HOME</li>
                    <li onClick={() => router.push('/about-us')}>ABOUT US</li>
                    <li onClick={() => router.push('/blog')}>BLOG</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar