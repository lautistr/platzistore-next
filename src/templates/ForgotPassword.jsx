import React from 'react';
import Image from 'next/image';
import roundLogo from '@verole/round_B&W.png';
import styles from '@styles/ForgotPassword.module.scss';

const ForgotPassword = () => {
	return (
		<div className={styles.ForgotPassword}>
			<div className={styles['ForgotPassword-container']}>
				<Image 
					src={roundLogo.src}
					alt="logo"
					className={styles['ForgotPassword-logo']}
					height={"100%"}
					width={"100%"}
					layout="responsive"
				/>
				<h1 className={styles.title}>Forgot your password?</h1>
				<p className={styles.subtitle}>
					Don't worry! It happens to the best of us.
					Enter your email or username to request a
					password reset link.
				</p>
				<form action="/" className={styles.form}>
					<label htmlFor="email" className={styles.label}>
						Email address
					</label>
					<input
						type="text"
						id="email"
						className={
									`${styles.input} 
									${styles[input-email]}`
									} 
					/>
					<input
						type="submit"
						value="Confirm"
						className={
									`${styles['primary-button']} 
									${styles['login-button']}`
									} 
					/>
				</form>
			</div>
		</div>
	);
}

export default ForgotPassword;