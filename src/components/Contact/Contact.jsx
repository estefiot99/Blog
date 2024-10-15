import React from 'react'
import styles from "./contact.module.scss";
import useForm from '@/hooks/useForm';

function Contact() {
    const formFields = {
        email: '',
        name: '',
        message: '',
    };

    const { handleChange, handleSubmit, values, errors } = useForm(formFields);

    return (
        <div className={styles.contact}>
            <div className={`container ${styles.flex}`}>
                <div className={styles.half}>
                    <h1>Get in touch</h1>
                    <form onSubmit={handleSubmit}>
                        {errors.email && <p className='error'>{errors.email}</p>}

                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={values.email}
                            onChange={handleChange} />
                        {errors.name && <p className='error'>{errors.name}</p>}

                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            value={values.name}
                            onChange={handleChange}
                        />
                        {errors.message && <p className='error'>{errors.message}</p>}

                        <textarea
                            name="message"
                            placeholder='Message'
                            value={values.message}
                            onChange={handleChange}
                        ></textarea>

                        <button>Submit</button>
                    </form>
                </div>
                <div className={`${styles.half} ${styles.contactImage} hide-sm`} style={{ backgroundImage: "url('/assets/images/contact.jpg')" }}></div>
            </div>
        </div>
    )
}

export default Contact