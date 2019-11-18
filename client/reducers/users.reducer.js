import { 
	SAVE_USERS_LIST, 
} from '../constants'; 

const initialState = { 
	 usersList: [],
}; 

const saveUsersList = (state, { list }) => ({...state, usersList: list});

const userReducer = (state = initialState, action) => { 
	switch (action.type) { 
	case SAVE_USERS_LIST:  
		return saveUsersList(state, action); 
  
    default: return state; 
	} 
}; 

export default userReducer; 
