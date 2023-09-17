import { createSlice } from '@reduxjs/toolkit';

// const initialFilter = { value: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialFilter: {
    value: '',
  },
  reducers: {
    filterName: {
      reducer(state, action) {
        state.value = action.payload.toLowerCase();
      },
    },
  },
});

export const { filterName } = filterSlice.actions;

export const getFilter = state => state.value;

export const filterReducer = filterSlice.reducer;
