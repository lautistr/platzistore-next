import React from 'react';
import Image from 'next/image';
import ProductInfo from '@components/ProductInfo';
import styles from '@styles/ProductDetail.module.scss';

import close from '@icons/icon_close.png';

const ProductDetail = ({ product, setToggleDetails, handleClick }) => {
	return (
		<aside className={styles.ProductDetail}>
			<div
				className={styles['ProductDetail-close']}
				onClick={() => setToggleDetails(false)}
			>
				<Image
					src={close.src}
					alt="close"
					height={'20px'}
					width={'20px'}
				/>
			</div>
			<ProductInfo
				product={product}
				handleClick={handleClick}
				setToggleDetails={setToggleDetails}
			/>
		</aside>
	);
}

export default ProductDetail;