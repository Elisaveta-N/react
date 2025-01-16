import { configureStore } from '@reduxjs/toolkit';
import agreementReducer from '../features/counter/agreementSlice.js';

export default configureStore({
  reducer: {
    agreed: agreementReducer,
  },
});