import {createSlice} from '@reduxjs/toolkit';

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    value: "Home",
  },
  reducers: {
    setPage : (state,action) => {
      state.value = action.payload;
    }
  },
});

export default pageSlice.reducer;
export const {setPage} = pageSlice.actions;
