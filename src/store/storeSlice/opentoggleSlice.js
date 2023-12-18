import { createSlice } from '@reduxjs/toolkit'




export const toggleOpenReducer = createSlice({
  name: 'toggleopen',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:{
    isOpen:null
  },
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    gettoggleopen: (state, action) => {
      state.isOpen = action.payload
    },
  },
})

export const { gettoggleopen } = toggleOpenReducer.actions

export default toggleOpenReducer.reducer