import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../firebase/config";
import {
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
// import { FcGoogle } from "react-icons//FcGoogle";
import { useNavigate } from "react-router-dom";

function Signin() {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			navigate("/", { replace: true });
			console.log(user);
		} catch (e) {
			alert(e.message);
			// navigate("/register", { replace: true });
			console.error(e.message);
		}

		setPassword("");
		setEmail("");
	};

	const handleGoogle = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithPopup(auth, provider);
			console.log(user);
			navigate("/", { replace: true });
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
				Sign In
			</Button>
			<Button onClick={handleGoogle} variant="info" type="submit">
				sign In with Google
			</Button>
		</Form>
	);
}

// const mapDispatchToProps = {
// 	addUser: addUser,
// };
// export default connect(null, mapDispatchToProps)(AddUserForm);
export default Signin;
