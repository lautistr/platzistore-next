import React from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<Link href="/account">
                        My account
                    </Link>
				</li>
				<li>
					<Link href="/login">
						Log out
                    </Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;