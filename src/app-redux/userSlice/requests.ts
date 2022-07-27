import axios, { AxiosPromise } from 'axios';
import { CreateUserParams, User } from 'types/UserTypes';
import { API_URL } from 'utils/config';

export const createUserRequest = (params: CreateUserParams): AxiosPromise<User> =>
  axios.create().post(`${API_URL}/register`, params);
