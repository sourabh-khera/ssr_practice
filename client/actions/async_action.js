import axios from 'axios';
import { saveUsersData } from './actions';
export const fetchUsersList = () => async dispatch => { 
	const URL = 'https://api.myjson.com/bins/ebrsc'; 
	try { 
		const response = await axios(URL, { 
			method: 'get', 
			headers: { 'Content-Type': 'application/json' }, 
    }); 
    dispatch(saveUsersData(response.data))
	} catch (error) { 
		console.log(error, "------") 
	} 
}; 