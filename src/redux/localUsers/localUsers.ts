import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface LocalUsers {
  id: string;
  profileName: string;
  age: string;
  Bio: string;
  oneLiner: string;
  image: string;
}

// const initialState: LocalUsers = [];

export const userSlice = createSlice({
  name: 'localUser',

  initialState: [],

  reducers: {
    getLocalUsers: (state, { payload }) => {
      if (payload.length > 0) {
        return [...payload];
      }
    },
  },
});

export const { getLocalUsers } = userSlice.actions;

export default userSlice.reducer;
