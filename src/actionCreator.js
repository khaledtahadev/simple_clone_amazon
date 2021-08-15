import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./types";

export const AddBasket = items => {
	return {
		type: ADD_TO_BASKET,
		items,
	};
};

export const RemoveBasket = id => {
	return {
		type: REMOVE_FROM_BASKET,
		id,
	};
};
