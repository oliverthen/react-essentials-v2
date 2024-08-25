import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCartState = {
	showCart: true
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		toggleCart(state) {
			state.showCart = !state.showCart
		},
		increment(state, action) {
			state[action.payload.title].quantity++;
		},
		decrement(state, action) {
			if (state[action.payload.title].quantity === 1) {
				delete state[action.payload.title];
				return
			}
			state[action.payload.title].quantity--;
		},
		addtoCart(state, action) {
			let title = action.payload.title;
			state[title] = action.payload;
		}
	}
});