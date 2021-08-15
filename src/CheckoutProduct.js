import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { BasketContext } from "./Provider";
import { RemoveBasket } from "./actionCreator";
import "./CheckoutProduct.css";

const checkoutProduct = ({ id, title, price, rating, image }) => {
	const [, dispatch] = BasketContext();

	const handleRemove = () => {
		dispatch(RemoveBasket(id));
	};

	return (
		<div className='checkoutProduct'>
			<img className='checkoutProduct__image' src={image} alt='' />
			<div className='checkoutProduct__productInfo'>
				<p className='checkoutProduct__title'>{title}</p>
				<p className='checkoutProduct__price'>${price}</p>
				<p className='checkoutProduct__rating'>
					{Array(rating)
						.fill()
						.map((_, index) => (
							<StarIcon
								className='checkoutProduct__star'
								key={parseInt(id + index)}
							/>
						))}
				</p>
				<button onClick={handleRemove} className='checkoutProduct__remove'>
					Remove
				</button>
			</div>
		</div>
	);
};

export default checkoutProduct;
