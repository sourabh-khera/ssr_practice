import {
  SAVE_USERS_LIST,
} from '../constants';

export const saveUsersData = list => ({type: SAVE_USERS_LIST, list});
