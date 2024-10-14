import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar';
import { ThemeContext } from '@/context/ThemeContext'

function Layout({ children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`layout ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
            <Navbar />
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default Layout