import React, { useContext } from 'react';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import Image from 'next/image';
import styles from '@styles/MyOrder.module.scss';

import arrow from '@icons/flechita.svg';

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
	const { state } = useContext(AppContext);

	return (
		<aside className={styles.MyOrder}>
			<div
				className={styles['title-container']}
			>
				<Image
					src={arrow.src}
					alt="arrow"
					height={'16px'}
					width={'16px'}
					className={styles.arrowIcon}
					onClick={() => 
						setToggleOrders(!toggleOrders)}
				/>
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map((product) => (
					<OrderItem
						product={product}
						key={`orderItem-${product.id}`}
					/>
				))}
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${state.total}</p>
				</div>
				<button className={styles['primary-button']}>
					<Link
						href="/checkout"
					>
						Checkout
					</Link>
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;