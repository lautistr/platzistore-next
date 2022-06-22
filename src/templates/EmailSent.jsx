import React from 'react';
import Image from 'next/image';
import roundLogo from '@verole/round_B&W.png';
import email from '@icons/email.svg';
import styles from '@styles/EmailSent.module.scss';

const SendEmail = () => {
	return (
		<div className={styles.SendEmail}>
			<div className="SendEmail-container">
				<Image
					src={roundLogo.src}
					alt="logo"
					className="SendEmail-logo"
					height="100%"
					width="100%"
				/>
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<Image
						src={email.src}
						alt="email"
						height={'100%'}
						width={'100%'}
					/>
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email? </span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;