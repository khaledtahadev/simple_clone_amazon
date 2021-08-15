import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./types";

export const initState = {
	Basket: [],
	user: null,
};

export const reducer = (state, action) => {
	if (action.type === ADD_TO_BASKET) {
		// Logic Add To Basket
		return {
			...state,
			Basket: [...state.Basket, action.items],
		};
	}

	if (action.type === REMOVE_FROM_BASKET) {
		// Logic Remove From Basket
		const newBasket = state.Basket.filter(item => item.id !== action.id);

		return {
			...state,
			Basket: [...newBasket],
		};
	}
	return state;
};
