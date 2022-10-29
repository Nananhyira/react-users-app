import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import AddUserForm from "../components/AddUserForm";
import AllUsers from "../components/AllUsers";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

function Home() {
	const handleClose = () => {
		signOut(auth);
	};
	return (
		<Container>
			<Row>
				<Col>
					<AddUserForm
					// newUser={AddNewUser}
					/>
				</Col>

				<Col>
					<AllUsers
					// userData={users}
					// deleteUser={deleteUser}
					// editUser={handleEdit}
					/>
				</Col>
				<Button onClick={handleClose} variant="danger">
					Logout
				</Button>
			</Row>
		</Container>
	);
}

export default Home;
