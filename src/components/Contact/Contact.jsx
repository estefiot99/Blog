import React from 'react'
import styles from "./contact.module.scss";

function Contact() {
    return (
        <div className={styles.contact}>
            <div className={`container ${styles.flex}`}>
                <div className={styles.half}>
                    <h1>Get in touch</h1>
                    <form action="">
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Name' />
                        <textarea placeholder='Message'></textarea>
                        <button>Submit</button>
                    </form>
                </div>
                <div className={`${styles.half} ${styles.contactImage}`}></div>
            </div>
        </div>
    )
}

export default Contact