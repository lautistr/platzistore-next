import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder'
import menu from '@icons/icon_menu.svg';
import isoLogo from '@verole/black_isologo.png';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
	const [ toggleDesktop, setToggleDesktop ] = useState(false);
	const [ toggleMobile, setToggleMobile ] = useState(false);
	const [ toggleOrders, setToggleOrders ] = useState(false);
	const { state } = useContext(AppContext);

	const handleClickDesktop = () => {
		setToggleDesktop(!toggleDesktop);
	}

	const handleClickMobile = () => {
		setToggleMobile(!toggleMobile);
	}

    return (
        <nav className={styles.Nav}>
			<Image
				src={menu.src} 
				alt="menu" 
				className={styles.menu}
				width={'24px'}
				height={'24px'}
				onClick={handleClickMobile}
			/>
			<div className={styles['navbar-left']}>
				<a href="/" className={styles['navbar-logo']}>
				<Link href="/">
					<Image
						src={isoLogo.src}
						alt="logo"
						width={'100px'}
						height={'50px'}
						layout="fixed"
					/>
				</Link>
				</a>
				<ul>
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
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					<li
						className={styles['navbar-email']}
						onClick={handleClickDesktop}
					>
						lautarostrappazzon@gmail.com
					</li>
					<li
						className={styles['navbar-shopping-cart']}
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<Image
							src={shoppingCart.src}
							alt="shopping cart"
							width={'20px'}
							height={'20px'}
						/>
						{state.cart.length > 0 && <div>{state.cart.length}</div>}
					</li>
				</ul>
			</div>
			{toggleDesktop && <Menu/>}
			{toggleMobile && <MobileMenu/>}
			{toggleOrders &&
				<MyOrder
					toggleOrders={toggleOrders}
					setToggleOrders={setToggleOrders}
				/>}
		</nav>
    );
}

export default Header;