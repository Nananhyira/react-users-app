import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";

function App() {
	const [users, setUsers] = useState([
		{ name: "John", email: "jon@gmail.com", gen: "4" },
		{ name: "Ama", email: "ama@gmail.com", gen: "4" },
		{ name: "Ama", email: "gmail.com", gen: "4" },
	]);
	const AddNewUser = (user) => {
		setUsers([...users, { name: user.name, email: user.email, gen: user.gen }]);
	};

	return (
		<>
			<Container>
				<Row>
					<Col>
						<AddUserForm newUser={AddNewUser} />
					</Col>

					<Col>
						<AllUsers userData={users} />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
