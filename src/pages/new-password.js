import React from 'react';
import Image from 'next/image';
import roundLogo from '@verole/round_B&W.png';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
	return (
		<div className={styles.NewPassword}>
			<div className={styles['NewPassword-container']}>
				<Image
					src={roundLogo.src}
					alt="logo"
					className={styles['NewPassword-logo']}
					height="100%"
					width="100%"
					layout="responsive"
				/>
				<h1 className={styles.title}>
                    Create a new password
                </h1>
				<p className={styles.subtitle}>
                    Enter a new password for your account
                </p>
				<form action="/" className={styles.form}>
					<label
                        for="password"
                        className={styles.label}
                    >
                        New password
                    </label>
					<input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className={`
                                    ${styles.input}
                                    ${styles['input-password']}
                                    `}
                    />
					<label
                        for="new-password"
                        className={styles.label}
                    >
                        Confirm new password
                    </label>
					<input
                        type="password"
                        id="new-password"
                        placeholder="*********"
                        className={`
                                    ${styles.input}
                                    ${styles['input-password']}
                                    `}
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

export default NewPassword;
