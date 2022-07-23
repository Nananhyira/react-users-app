import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AddUserForm from "./components/AddUserForm";
import Card from "react-bootstrap/Card";
import AllUsers from "./components/AllUsers";

function App() {
	const [users, setUsers] = useState([
		{ name: "John", email: "jon@gmail.com", gen: "4" },
		{ name: "Ama", email: "ama@gmail.com", gen: "4" },
    { name: "Ama", email: "gmail.com", gen: "4" },
	]);
	return (
		<>
			<Container>
				<Row>
					<Col md={6}>
						<AddUserForm />
					</Col>

					<Col md={6}>
						<AllUsers userData={users} />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
