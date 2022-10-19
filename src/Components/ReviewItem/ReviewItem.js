import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product, handleReviewItem }) => {
    const { id, name, price, quantity, shipping, img } = product;
    return (
        <div className='review-item'>
            <div><img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>price: ${price} </small></p>
                    <p><small>shipping: ${shipping} </small></p>
                    <p><small>Quantity: {quantity} </small></p>
                </div>
                <div className="delete-btn-container">
                    <button onClick={() => handleReviewItem(id)} className='delete-btn'> <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon> </button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;