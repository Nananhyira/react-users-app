import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";
import { v4 as uuid } from "uuid";

function AddUserForm(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gen, setGen] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		let newUser = { name: name, email: email, gen: gen, id: uuid() };
		props.addUser(newUser);
		console.log(newUser);
		setName("");
		setEmail("");
		setGen("");
	};

	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Name</Form.Label>
				<Form.Control
					type="Name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Gen</Form.Label>
				<Form.Control
					type="gen"
					value={gen}
					onChange={(e) => {
						setGen(e.target.value);
					}}
				/>
			</Form.Group>

			<Button onClick={handleSubmit} variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}
const mapDispatchToProps = {
	addUser: addUser,
};

export default connect(null, mapDispatchToProps)(AddUserForm);
