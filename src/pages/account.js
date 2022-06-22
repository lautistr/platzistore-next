import React from 'react';
import Link from 'next/link';
import styles from '@styles/Account.module.scss';

const MyAccount = () => {
	return (
		<div className={styles.MyAccount}>
			<div className={styles['MyAccount-container']}>
				<h1 className={styles.title}>My account</h1>
				<form action="/" className={styles.form}>
					<div>
						<label
                            for="name"
                            className={styles.label}
                        >
                            Name
                        </label>
						<p
                            className={styles.value}
                        >
                            Lautaro Strappazzon
                        </p>
						<label
                            for="email"
                            className={styles.label}
                        >
                            Email
                        </label>
						<p
                            className={styles.value}
                        >
                            lautarostrappazzon@gmail.com
                        </p>
						<label
                            for="password"
                            className={styles.label}
                        >
                            Password
                        </label>
						<p
                            className={styles.value}
                        >
                            *********
                        </p>
					</div>
					<Link href="/forgot-password">
                        <input
                            type="button"
                            value="Edit"
                            className={
                                        `${styles['secondary-button']}
                                        ${styles['login-button']}`
                                        }
                        />
                    </Link>
				</form>
			</div>
		</div>
	);
}

export default MyAccount;