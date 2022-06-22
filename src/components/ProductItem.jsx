import React, { useContext, useState } from 'react';
import ProductDetail from '@containers/ProductDetail';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
	const [ toggleDetails, setToggleDetails] = useState(false);
	const handleToggleDetails = () => {
		setToggleDetails(!toggleDetails);
	}

	const { addToCart } = useContext(AppContext);
	const handleClick = (item) => {
		addToCart(item);
	}

	return (
		<div className={styles.ProductItem}>
			<Image
				loader={() => product.images[0]}
				src={product.images[0]}
				className={styles['product-image']}
				width={'240px'}
				height={'240px'}
				layout="responsive"
				alt={product.title}
				onClick={handleToggleDetails}
			/>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure
					className={styles['add-to-cart-icon']}
					onClick={() => handleClick(product)}
				>
					<Image
						src={addToCartImage.src}
						alt="add to cart"
						height={'40px'}
						width={'40px'}	
					/>
				</figure>
			</div>
			{toggleDetails && <ProductDetail
			 product={product}
			 handleClick={handleClick}
			 setToggleDetails={setToggleDetails}
			/>}
		</div>
	);
}


export default ProductItem;