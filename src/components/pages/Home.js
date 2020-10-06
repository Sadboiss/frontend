import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

const HomePageBody = () => {

	return (
		<Container>
			<Col>
				{Section1()}
				{Section2()}
			</Col>
		</Container>
	)
}

const Section1 = () => {
	return (
		<Row className="section1 justify-content-md-center">
			<Col md={8}>
				<Row className="justify-content-md-center">
					<h2>Montreal Authenticity</h2>
				</Row>
				<Row>
					<Row className="justify-content-md-center">
						<Col md={8}>
							<p>Montreal Authenticity is a collective brand started by a young entrepreneur who enjoys desigining in his free time. Born and raised in Montreal, I fell in love with this beautiful city. The day and night life brings out the most creative aspect off me. That is why I designed this brand, to represent the people in this city and to make exclusive clothing only people from the city will enjoy.</p>
						</Col>
						<Col md="auto" className="justify-content-md-center">
							<Button variant="dark">Get Started</Button>
						</Col>
					</Row>
				</Row>
			</Col>
		</Row>
	)
}

const Section2 = () => {
	return (
		<Row className="justify-content-md-center section2">
				<Col md={8}>
				</Col>
		</Row>
	)
}

export default HomePageBody
