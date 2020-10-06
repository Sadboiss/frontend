import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import placeholder from '../assets/placeholder.jpeg'

export default class MACard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: null
        }
    }
    
    render() {
        return (
            <Card className="ma-card" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        <img src={placeholder} alt="sds"/>
                    </Card.Text>
                    <Card.Link href="#">Add to cart</Card.Link>
                    <Card.Link href="#">See more</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}