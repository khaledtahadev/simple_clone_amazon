import React from "react";
import { BasketContext } from "./Provider";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
import "./Checkout.css";

const Checkout = () => {
	const [{ Basket }] = BasketContext();

	return (
		<div className='checkout'>
			<div className='checkout__left'>
				<h1>This is Your Checkout Products</h1>
				{Basket.length ? (
					Basket.map(item => (
						<CheckoutProduct
							key={item.id}
							id={item.id}
							title={item.title}
							price={item.price}
							rating={item.rating}
							image={item.image}
						/>
					))
				) : (
					<h1>Ther is No Priducts Yet</h1>
				)}
			</div>
			<div className='checkout__right'>
				<SubTotal />
			</div>
		</div>
	);
};

export default Checkout;
