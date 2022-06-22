import React from 'react';
import Head from 'next/head';
import styles from '@styles/SignUp.module.scss';

const SignUp = () => {
	return (
        <>
            <Head>
				<title>Create Account</title>
			</Head>
            <div className={styles.SignUp}>
                <div className={styles['SignUp-container']}>
                    <h1 className={styles.title}>My account</h1>
                    <form action="/" className={styles.form}>
                        <div>
                            <label
                                for="name"
                                className={styles.label}
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className={
                                            `${styles.input}
                                            ${styles['input-name']}`
                                            }
                            />
                            <label
                                for="email"
                                className={styles.label}
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                placeholder="your@email.com"
                                className={
                                            `${styles.input} 
                                            ${styles['input-email']}`
                                            } 
                            />
                            <label
                                for="password"
                                className={styles.label}
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="*********"
                                className={
                                            `${styles.input} 
                                            ${styles['input-password']}`
                                            } 
                            />
                        </div>
                        <input
                            type="submit"
                            value="Create"
                            className={
                                        `${styles['primary-button']} 
                                        ${styles['login-button']}`
                                        } 
                        />
                    </form>
                </div>
            </div>
        </>
	);
}

export default SignUp;