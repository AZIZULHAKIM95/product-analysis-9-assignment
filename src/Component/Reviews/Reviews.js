import React from 'react';
import { CardGroup } from 'react-bootstrap';
import useReviews from '../../Hooks/useReviews';
import SReview from '../SReview/SReview';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()

    return (
        <div className='row mt-5'>
            <br />
            <br />
            <h1>CUSTOMERS REVIEWS</h1>
            <br />
            <br />
            <CardGroup>
                {
                    reviews.map(review => <SReview
                        key={review.id}
                        review={review}
                    ></SReview>)
                }
            </CardGroup>
        </div>
    );
};

export default Reviews;