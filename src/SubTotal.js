import React from "react";
import "./SubTotal.css";
import { BasketContext } from "./Provider";

const SubTotal = () => {
	const [{ Basket }] = BasketContext();

	const getTotalPrice = () =>
		Basket.reduce((calc, item) => calc + item.price, 0);

	return (
		<div className='subTotal'>
			<h1>SubTotal</h1>
			<div className='subTotal_Price'>
				SubTotal({Basket.length} items): <strong>${getTotalPrice()}</strong>
			</div>
			<div className='subTotal__Gift'>
				<input type='checkbox' /> This Order Contain a Gift
			</div>
			<button className='subTotal__Button'>Proceed To Checkout</button>
		</div>
	);
};

export default SubTotal;
