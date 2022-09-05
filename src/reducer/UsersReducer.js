import { v4 as uuid } from "uuid";
let initialState = {
	users: [
		{ name: "John", email: "jon@gmail.com", gen: "4", id: uuid() },
		{ name: "Ama", email: "ama@gmail.com", gen: "48", id: uuid() },
		{ name: "tony", email: "gmail.com", gen: "40", id: uuid() },
		{
			name: "kachi ",
			email: "kachigmail.com",
			gen: "90",
			id: "090390kiocjifiorhi4",
		},
		{
			name: "nana ",
			email: "kachigmail.com",
			gen: "90",
			id: "090390kiocjifiorhi4",
		},
	],
};

let UsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_USER":
			return { ...state, users: [...state.users, action.payload] };

		default:
			return state;
	}
};

export default UsersReducer;
