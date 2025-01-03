import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/cart.Slice'

export const store = configureStore({
  reducer: {
    cart : cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables serializable state check
    }
  ),
})