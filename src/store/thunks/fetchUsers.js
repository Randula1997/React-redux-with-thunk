import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');

  await pause(1000) //dev only
  return response.data;
});

//dev only

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    });
}

export { fetchUsers };