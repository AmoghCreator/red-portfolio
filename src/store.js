import {createSlice, configureStore} from '@reduxjs/toolkit';
import pageSlice from './slice/pageSlice';

export default configureStore({
  reducer: {
    page: pageSlice,
  }
});
