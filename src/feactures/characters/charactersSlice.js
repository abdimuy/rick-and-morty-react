import { createSlice } from '@reduxjs/toolkit'

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: [],
  reducers: {
    addCharacters: (state, action) => {
      // state.push(...action.payload)
      return [...action.payload]
    }
  }
})

export const { addCharacters } = charactersSlice.actions

export default charactersSlice.reducer
