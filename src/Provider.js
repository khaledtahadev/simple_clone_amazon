import { createContext, useReducer, useContext } from "react";
import { reducer, initState } from "./reducer";

export const StateProvider = createContext();

export const Provider = ({ children }) => (
	<StateProvider.Provider value={useReducer(reducer, initState)}>
		{children}
	</StateProvider.Provider>
);

//this we used Inside Components
export const BasketContext = () => useContext(StateProvider);
