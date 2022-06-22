import React, { useContext } from 'react';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import styles from '@styles/Orders.module.scss';

const Orders = ({ setToggle }) => {
	const { state } = useContext(AppContext);

	return (
		<div className={styles.Orders}>
			<div className="Orders-container">
				<div className="title-container" onClick={() => setToggle(false)}>
					<Image
						src={arrow.src}
						alt="arrow"
						layout='fill'
					/>
					<h1 className="title">My orders</h1>
				</div>
				<div className="Orders-content">
					{state.cart.map((product) => (
						<OrderItem
							product={product}
							key={`orderItem-${product.id}`}
						/>
					))}
				</div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${state.total}</p>
				</div>
				<a href="/checkout"><button className="primary-button">
					Checkout
				</button></a>
			</div>
		</div>
	);
}

export default Orders;