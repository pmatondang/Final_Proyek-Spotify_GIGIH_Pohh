import { configureStore } from '@reduxjs/toolkit';

//reducer
import authReducer from '../Reducers/authRreduer';

export default configureStore({
	reducer: {
		auth: authReducer,
	},
});
