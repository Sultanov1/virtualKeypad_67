import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PinState {
  input: string;
  asterisk: string,
}

const initialState: PinState = {
  input: '',
  asterisk: ''
};

export const pinSlice = createSlice({
  name: 'pin',
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.input.length < 4) {
        state.input += action.payload;
        state.asterisk += '*';
      }
    },
  }
});

export const  pinReducer = pinSlice.reducer;

export const {addNumber} = pinSlice.actions;

