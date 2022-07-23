import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function AllUsers(props) {
	return (
		<>
			{props.userData.map((item, index) => {
				return (
					<Card style={{ width: "18rem" }} key={index}>
						<Card.Body>
							<Card.Title>Name: {item.name}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Email:{item.email}
							</Card.Subtitle>
							<Card.Text>Gen :{item.gen}</Card.Text>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				);
			})}
		</>
	);
}

export default AllUsers;
