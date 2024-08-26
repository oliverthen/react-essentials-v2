import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description } = props;

	const dispatch = useDispatch();
	const cart = useSelector(state => state);

	const addToCartHandler = () => {
		dispatch(cartActions.addtoCart({
			title,
			price,
			description,
			quantity: 1
		}));
		console.log(cart);
	};

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
