import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {

	const { removeFromCart } = useContext(AppContext);

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image
					src={product?.images[0]}
					alt={product?.title}
					height={'100%'}
					width={'100%'}
				/>
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image
				src={close.src}
				alt="close"
				height={'12px'}
				width={'12px'}
				onClick={() => removeFromCart(product)}
				className={styles.removeImage}
			/>
		</div>
	);
}

export default OrderItem;