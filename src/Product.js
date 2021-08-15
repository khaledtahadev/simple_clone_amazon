import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { BasketContext } from "./Provider";
import { AddBasket } from "./actionCreator";

const Product = ({ id, title, price, rating, image }) => {
	const [, dispatch] = BasketContext();

	const handleAddItems = () => {
		const items = {
			id,
			title,
			price,
			rating,
			image,
		};
		dispatch(AddBasket(items));
	};

	return (
		<div className='Product'>
			<div className='product__info'>
				<p className='product__title'>{title}</p>
				<p>
					<strong>${price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_, index) => (
							<StarIcon className='product__Star' key={parseInt(id + index)} />
						))}
				</div>
			</div>
			<img className='product_img' src={image} alt='' />
			<button onClick={handleAddItems} className='product__basket'>
				Add To Basket
			</button>
		</div>
	);
};

export default Product;
