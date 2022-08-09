import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from '../feactures/characters/charactersSlice'

export const store = configureStore({
  reducer: {
    characters: charactersReducer
  }
})
