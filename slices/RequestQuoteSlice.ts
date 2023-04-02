import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RequestQuoteState {
  isOpen: boolean
}

const initialState: RequestQuoteState = {
  isOpen: false,
}

export const requestQuoteSlice = createSlice({
  name: 'requestQuote',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = requestQuoteSlice.actions

export default requestQuoteSlice.reducer