import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateUserParams } from 'types/UserTypes';
import { createUserRequest } from './requests';

export const createUser = createAsyncThunk('user/createUser', async (params: CreateUserParams) => {
  const { data } = await createUserRequest(params);
  return data;
});
