import { Card, Button } from "react-bootstrap";

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
							<Button variant="primary" href="#">
								Edit
							</Button>
							<Button variant="danger" href="#">
								Delete Me
							</Button>
						</Card.Body>
					</Card>
				);
			})}
		</>
	);
}

export default AllUsers;
