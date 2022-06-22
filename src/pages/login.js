import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import roundLogo from '@verole/round_B&W.png';
import styles from '@styles/Login.module.scss';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        };
        console.log(data);
    }

    return (
		<div className={styles.login}>
			<div className={styles['login-container']}>
				<Image
					src={roundLogo.src}
					alt="logo"
					className={styles['login-logo']}
					height="100%"
					width="100%"
				/>
				<form action="/" className={styles.form} ref={form}>
					<label
						htmlFor="email"
						className={styles.label}
					>
						Email address
					</label>
					<input
						type="text"
						name="email"
						placeholder="your@email.com"
						className={
									`${styles.input}
									${styles['input-email']}`
									}
					/>
					<label
						htmlFor="password"
						className={styles.label}
					>
						Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="*********"
						className={
									`${styles.input}
									${styles['input-password']}`
									}
					/>
					<button
						onClick={handleSubmit}
						className={
									`${styles['primary-button']}
									${styles['login-button']}`
									}
                    >
						Log in
					</button>
					<Link href="/forgot-password">Forgot my password</Link>
				</form>
				<Link href="/signup">
					<button
						className={
									`${styles['secondary-button']}
									${styles['signup-button']}`
									}
					>
						Sign up
					</button>
				</Link>
			</div>
		</div >
	);
}

export default Login;