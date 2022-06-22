import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import styles from '@styles/Orders.module.scss';

const Orders = ({ setToggle }) => {
	const { state } = useContext(AppContext);

	return (
		<div className={styles.Orders}>
			<div className={styles['Orders-container']}>
				<div
                    className={styles['title-container']}
                    onClick={() => setToggle(false)}
                >
					<Image
						src={arrow.src}
						alt="arrow"
						layout='fill'
					/>
					<h1 className={styles.title}>My orders</h1>
				</div>
				<div className={styles['Orders-content']}>
					{state.cart.map((product) => (
						<OrderItem
							product={product}
							key={`orderItem-${product.id}`}
						/>
					))}
				</div>
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${state.total}</p>
				</div>
				<Link href="/checkout">
                    <button className={styles['primary-button']}>
                        Checkout
                    </button>
                </Link>
			</div>
		</div>
	);
}

export default Orders;