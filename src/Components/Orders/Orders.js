import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const handleReviewItem = id => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='Shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleReviewItem={handleReviewItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>There is no item to review.Please <Link to="/">please Shop</Link> .</h2>
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipping'> <button>Shipping</button> </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;