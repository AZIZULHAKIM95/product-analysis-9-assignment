import React from 'react';
import { Card } from 'react-bootstrap';

const SReview = (props) => {

    const { name, comment, rating } = props.review
    return (
        <div className=''>
            <div className=''>
                <Card className=' '>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {comment}
                        </Card.Text>
                        <br />
                        <Card.Text>
                            {rating}
                        </Card.Text>
                    </Card.Body>

                </Card>

            </div>
        </div>
    );
};

export default SReview;