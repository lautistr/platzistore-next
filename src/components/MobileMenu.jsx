import React from 'react';
import Link from 'next/link';
import styles from '@styles/MobileMenu.module.scss';

const MobileMenu = () => {
    return (
        <div className={styles['mobile-menu']}>
               <ul>
                    <li>
                        <p>CATEGORIES</p>
                    </li>
                    <li>
                        <Link href="/">
                            All
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Necklaces
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                           Earrings
                        </Link>

                    </li>
                    <li>
                        <Link href="/">
                            Bracelets
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                           Rings
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                          Others
                        </Link>
                    </li>
                </ul>
                <ul className={styles.account}>
                    <li>
                        <Link href="/account">
                            My account
                        </Link>
                    </li>
                    <li>
                        <Link href="/account">
                            lautarostrappazzon@gmail.com
                        </Link>
                    </li>
                </ul>
                <ul className={styles['log-out']}>
                    <li>
                        <Link href="/login">
                            Log out
                        </Link>
                    </li>
                </ul>
        </div>
    );
}

export default MobileMenu;

