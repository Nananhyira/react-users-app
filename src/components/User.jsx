import React from "react";
import { Card, Button, Col } from "react-bootstrap";

function User(props) {
	return (
		<Col md={3}>
			<Card style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Title>Name: {props.userInfo.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						Email:{props.userInfo.email}
					</Card.Subtitle>
					<Card.Text>Gen :{props.userInfo.gen}</Card.Text>
					<Button variant="primary" href="#">
						Edit
					</Button>
					<Button variant="danger" href="#">
						Delete Me
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default User;
