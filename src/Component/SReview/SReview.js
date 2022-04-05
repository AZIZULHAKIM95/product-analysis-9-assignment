import React from 'react';
import { Card } from 'react-bootstrap';

const SReview = (props) => {

    const { name, comment, rating, img } = props.review
    return (
        <div className='col-md-4'>
            <Card className='m-4'>
                <Card.Img className='w-25 m-auto bg-light' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fs-3'>{name}</Card.Title>
                    <Card.Text>
                        {comment}
                    </Card.Text>
                    <br />
                    <Card.Text className='fw-bold'>
                        {rating}
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    );
};

export default SReview;