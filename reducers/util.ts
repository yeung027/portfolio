import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface UtilState {
  isMobile:boolean | undefined;
}

const initialState: UtilState = {
  isMobile:undefined,
};

export const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    }
  }
});

export const utilState = (state: RootState) => state.util;

export const { setIsMobile } = utilSlice.actions;

export default utilSlice.reducer;