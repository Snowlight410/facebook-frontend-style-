import { configureStore } from '@reduxjs/toolkit'
import toggleOpenReducer from './storeSlice/opentoggleSlice'

export const store = configureStore({
  reducer: {
    opentoggle:toggleOpenReducer
  },
})