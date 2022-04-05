import React from 'react';
import { CardGroup } from 'react-bootstrap';
import useReviews from '../../Hooks/useReviews';
import SReview from '../SReview/SReview';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()

    return (
        <div>
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