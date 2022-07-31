import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";

function App() {
	const [users, setUsers] = useState([
		{ name: "John", email: "jon@gmail.com", gen: "4", id: "edjjdjdjdjdkskw" },
		{ name: "Ama", email: "ama@gmail.com", gen: "48", id: "udiue9893e03-kked" },
		{ name: "tony", email: "gmail.com", gen: "40", id: "uuueiriedm003wwsw" },
		{
			name: "kachi ",
			email: "kachigmail.com",
			gen: "90",
			id: "090390kiocjifiorhi4",
		},
	]);
	//add new user to the users array(state)
	const AddNewUser = (user) => {
		user.id = Math.random().toString(36);
		setUsers([
			...users,
			{ id: user.id, name: user.name, email: user.email, gen: user.gen },
		]);
		console.log(user);
	};
	//delete user from users array
	const deleteUser = (id) => {
		//tenary operator to delete user from users array
		setUsers(users.filter((user) => user.id !== id));

		//normal if else statement to delete user from users array
		// setUsers(
		// 	users.filter((user) => {
		// 		if (user.id !== id) {
		// 			return user;
		// 		}
		// 	})
		// );
	};
	//edits user in users array
	const handleEdit = (id, newInfo) => {
		// setUsers(
		// 	users.map((user) => {
		// 		if (user.id !== id) {
		// 			return user;
		// 		}
		// 		return newInfo;
		// 	})
		// );
		setUsers(users.map((user) => (user.id === id ? newInfo : user)));
	};
	return (
		<>
			<Container>
				<Row>
					<Col>
						<AddUserForm newUser={AddNewUser} />
					</Col>

					<Col>
						<AllUsers
							userData={users}
							deleteUser={deleteUser}
							editUser={handleEdit}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
