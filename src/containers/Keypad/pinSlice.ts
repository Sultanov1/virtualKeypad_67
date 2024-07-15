import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PinState {
  input: string;
  asterisk: string,
  isValid: boolean | null,
  checked: boolean,
}

const initialState: PinState = {
  input: '',
  asterisk: '',
  isValid: null,
  checked: false,
};

const currentPin = '5213';

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
    removeNumber: (state) => {
      state.input = state.input.slice(0, -1);
      state.asterisk = state.asterisk.slice(0, -1);
      state.checked = false;
    },
    checkPin: (state) => {
      state.isValid = state.input === currentPin;
      state.checked = true;
    },
  }
});

export const pinReducer = pinSlice.reducer;
export const {addNumber, removeNumber, checkPin} = pinSlice.actions;

