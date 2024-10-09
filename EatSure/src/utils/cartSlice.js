import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    Add_Item: (state, action) => {
      state.items.push(action.payload);
    },
    Remove_Item: (state) => {
      state.items.pop();
    },
    Clear_Item: (state) => {
      state.items.length = 0;
    },
  },
});

export const { Add_Item, Remove_Item, Clear_Item } = cartSlice.actions;
export default cartSlice.reducer;
