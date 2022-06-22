import React from 'react';
import Image from 'next/image';
import addToCart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = ({ product, handleClick, setToggleDetails }) => {
	const addToCartAndClose = () => {
		handleClick(product),
		setToggleDetails(false)
	}

	return (
		<aside className={styles.aside}>
			<Image
				src={product.images[0]}
				alt={product.title}
				className="product"
				height={'100%'}
				width={'100%'}
				layout='responsive'
			/>
			<div className={styles.ProductInfo}>
				<p>${product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button
					className={`${styles['primary-button']} ${styles['add-to-cart-button']}`}
					onClick={addToCartAndClose}
				>
					<Image
						src={addToCart.src}
						alt="add to cart"
						id="add-to-cart"
						height={'20px'}
						width={'20px'}
					/>
					Add to cart
				</button>
			</div>
		</aside>
	);
}

export default ProductInfo;