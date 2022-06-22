import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import roundLogo from '@verole/round_B&W.png';
import email from '@icons/email.svg';
import styles from '@styles/EmailSent.module.scss';

const SendEmail = () => {
	return (
		<div className={styles.SendEmail}>
			<div className={styles['SendEmail-container']}>
				<Image
					src={roundLogo.src}
					alt="logo"
					className={styles['SendEmail-logo']}
					height="100%"
					width="100%"
				/>
				<h1 className={styles.title}>Email has been sent!</h1>
				<p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
				<div className={styles['email-image']}>
					<Image
						src={email.src}
						alt="email"
						height={'100%'}
						width={'100%'}
					/>
				</div>
                <Link href="/login">
                    <button
                        className={`
                                    ${styles['primary-button']}
                                    ${styles['login-button']}
                                    `}
                    >
                        Login
                    </button>
                </Link>
				<p className={styles.resend}>
					<span>Didn't receive the email? </span>
					<Link href="/">Resend</Link>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;