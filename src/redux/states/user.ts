import { createSlice } from '@reduxjs/toolkit';

import { clearLocalStorage, persistLocalStorage } from '../../utilities';
import { User } from '@/pages/Users';

export const EmptyUserState: User = {
	id: 0,
	userName: '',
	password: '',
	role: ''
};

export const UserKey = 'user';

export const userSlice = createSlice({
	name: 'user',
	initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
	reducers: {
		createUser: (state, action) => {
			persistLocalStorage<User>(UserKey, action.payload);
			return action.payload;
		},
		updateUser: (state, action) => {
			const result = { ...state, ...action.payload };
			persistLocalStorage<User>(UserKey, result);
			return result;
		},
		resetUser: () => {
			clearLocalStorage(UserKey);
			return EmptyUserState;
		}
	}
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;