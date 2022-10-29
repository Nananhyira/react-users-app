import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";
import {
	collection,
	orderBy,
	query,
	getDocs,
	onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "./firebase/config";
import { addUser } from "./actions/userActions";
import { useDispatch } from "react-redux";
import Routing from "./Routing";
import { authUser } from "./actions/authActions";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		try {
			const readData = async () => {
				const q = query(collection(db, "user"), orderBy("timestamp", "desc"));
				const unsubscribe = await onSnapshot(q, (querySnapshot) => {
					const users = [];
					querySnapshot.forEach((doc) => {
						users.push(doc.data());
					});
					dispatch(addUser(users));
					console.log(users);
				});
			};
			readData();
		} catch (e) {
			console.log(e);
		}
	}, [dispatch]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(authUser(user));
			} else {
				dispatch(authUser(null));
			}
		});
	}, [dispatch]);
	// const [users, setUsers] = useState([
	// { name: "John", email: "jon@gmail.com", gen: "4", id: "edjjdjdjdjdkskw" },
	// { name: "Ama", email: "ama@gmail.com", gen: "48", id: "udiue9893e03-kked" },
	// { name: "tony", email: "gmail.com", gen: "40", id: "uuueiriedm003wwsw" },
	// {
	// 	name: "kachi ",
	// 	email: "kachigmail.com",
	// 	gen: "90",
	// 	id: "090390kiocjifiorhi4",
	// },
	// ]);
	//add new user to the users array(state)
	// const AddNewUser = (user) => {
	// 	user.id = Math.random().toString(36);
	// 	setUsers([
	// 		...users,
	// 		{ id: user.id, name: user.name, email: user.email, gen: user.gen },
	// 	]);
	// 	console.log(user);
	// };
	// //delete user from users array
	// const deleteUser = (id) => {
	// 	//tenary operator to delete user from users array
	// 	// setUsers(users.filter((user) => user.id !== id));

	// 	setUsers(users.filter((user) => (user.id !== id ? user : null)));

	// 	//normal if else statement to delete user from users array
	// 	// setUsers(
	// 	// 	users.filter((user) => {
	// 	// 		if (user.id !== id) {
	// 	// 			return user;
	// 	// 		}
	// 	// 	})
	// 	// );
	// };
	// //edits user in users array
	// const handleEdit = (id, newInfo) => {
	// 	//normal if else statement to edit user from users array
	// 	// setUsers(
	// 	// 	users.map((user) => {
	// 	// 		if (user.id !== id) {
	// 	// 			return user;
	// 	// 		}
	// 	// 		return newInfo;
	// 	// 	})
	// 	// );
	// 	//tenary operator to edit user from users array
	// 	// setUsers(users.map((user) => (user.id === id ? newInfo : user)));
	// 	setUsers(
	// 		users.map((user) => {
	// 			if (user.id === id) {
	// 				return newInfo;
	// 			}
	// 			return user;
	// 		})
	// 	);
	// };

	return (
		<>
			<Container>
				<Routing />
				{/* <Row>
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
				</Row> */}
			</Container>
		</>
	);
}

export default App;
