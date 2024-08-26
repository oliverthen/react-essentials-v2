import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

	const dispatch = useDispatch();
	const cart = useSelector(state => state.cartItems);

	const incrementHandler = index => {
		dispatch(cartActions.increment(index));
	};

	const decrementHandler = (index) => {
		dispatch(cartActions.decrement(index));
	};


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
				{cart.map((item, index) => {
					let total = item.price * item.quantity;

					let { title, price, quantity } = item;

					return (
						<CartItem key={item.title} item={{
							title,
							price,
							quantity,
							total,
							index
						}} incrementHandler ={incrementHandler} decrementHandler ={decrementHandler}/>
					);
				})}
      </ul>
    </Card>
  );
};

export default Cart;
