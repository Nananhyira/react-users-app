import { Container, Row } from "react-bootstrap";
import User from "./User";
import { connect, useSelector } from "react-redux";

function AllUsers(props) {
	const { det } = useSelector((state) => {
		return state;
	});
	return (
		<>
			<Container>
				<Row>
					{det.map((item, index) => {
						return (
							<User
								key={index}
								userInfo={item}
								deleteUser={props.deleteUser}
								editUser={props.editUser}
							/>
						);
					})}
				</Row>
			</Container>
		</>
	);
}
// const mapStateToProps =(state)=>{
// 	return {users:state.users}

// }

// export default connect(mapStateToProps, )(AllUsers);
export default AllUsers;
