import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCartState = {
	showCart: true, cartItems: []
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		toggleCart(state) {
			state.showCart = !state.showCart;
		},
		increment(state, action) {
			state.cartItems[action.payload].quantity++;
		},
		decrement(state, action) {
			if (state.cartItems[action.payload].quantity === 1) {
				state.cartItems.splice(action.payload, 1);
				return;
			}
			state.cartItems[action.payload].quantity--;
		},
		addtoCart(state, action) {
			state.cartItems.push(action.payload);
		}
	}
});

export const cartActions = cartSlice.actions;

const store = configureStore({
	reducer: cartSlice.reducer
});

export default store;