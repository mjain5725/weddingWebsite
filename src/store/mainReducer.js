import { createSlice } from '@reduxjs/toolkit';

const initState = {
  gender: 'female',
};

export const changeGender = createSlice({
  name: 'changeGender',
  initialState: initState,
  reducers: {
    changeSelectedGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { changeSelectedGender } = changeGender.actions;

export default changeGender.reducer;
