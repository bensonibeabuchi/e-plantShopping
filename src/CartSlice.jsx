import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        // If item already exists, increment quantity
        existingItem.quantity++;
      } else {
        // If item doesn't exist, add new item with quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove an item from the cart
    removeItem: (state, action) => {
      // Filter out the item to be removed based on its name
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        // Update quantity only if item exists
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export actions for dispatching
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export reducer to be used in store
export default cartSlice.reducer;
