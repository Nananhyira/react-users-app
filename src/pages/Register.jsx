import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function AddUserForm() {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			console.log(user);
			navigate("/signin" , {replace:true});
		} catch (e) {
			console.error(e.message);
		}

		setPassword("");
		setEmail("");
	};

	return (
		<Form>
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
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>password</Form.Label>
				<Form.Control
					type="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</Form.Group>

			<Button onClick={handleSubmit} variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

// const mapDispatchToProps = {
// 	addUser: addUser,
// };
// export default connect(null, mapDispatchToProps)(AddUserForm);
export default AddUserForm;
