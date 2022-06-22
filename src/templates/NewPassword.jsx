import React from 'react';
import Image from 'next/image';
import roundLogo from '@verole/round_B&W.png';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
	return (
		<div className={styles.NewPassword}>
			<div className="NewPassword-container">
				<Image
					src={roundLogo.src}
					alt="logo"
					className="NewPassword-logo"
					height="100%"
					width="100%"
					layout="responsive"
				/>
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new passwrd for yue account</p>
				<form action="/" className="form">
					<label for="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label for="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default NewPassword;