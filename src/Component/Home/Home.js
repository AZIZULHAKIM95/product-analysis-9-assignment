import React from 'react';
import { Button, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import pic from "../Image/jkgf.png"
import SReview from '../SReview/SReview';

const Home = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <div className='d-flex m-5'>
                <div className='m-5'>
                    <h1 className='text-primary fw-bold fs-1 '>WELCOME TO <span className='text-secondary'>SHADOW COMPUTER</span> </h1>

                    <h1 className='fw-bold text-primary'>YOUR BEST DEALS IS HERE</h1>

                    <p className='fs-4 '>We were honored to receive 38 awards this year—with two products making the “7 most impressive laptops” list.</p>

                    <br />

                    <Button className='p-3' variant="primary">LIVE DEMO</Button>

                </div>
                <div className='mb-5'>
                    <img className='w-100 h-100' src={pic} />
                </div>
            </div>

            <div>
                <h1>CUSTOMER REVIEWS (3)</h1>
                <CardGroup>
                    {
                        reviews.slice(0, 3).map(review => <SReview
                            key={review.id}
                            review={review}

                        >
                        </SReview>)
                    }
                </CardGroup>
            </div>

            <div className='m-5'>
                <Link to='/reviews'>
                    <Button>SHOW ALL COMMENTS</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;