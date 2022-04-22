import { configureStore } from "@reduxjs/toolkit";

// Reducer
import authReducer from '../Reducers/authRreduer';

export default configureStore({
	reducer: {
		auth: authReducer,
	},
});
