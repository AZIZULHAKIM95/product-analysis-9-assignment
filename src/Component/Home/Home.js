import React from 'react';
import { Button } from 'react-bootstrap';
import pic from "../Image/jkgf.png"

const Home = () => {
    return (
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
    );
};

export default Home;