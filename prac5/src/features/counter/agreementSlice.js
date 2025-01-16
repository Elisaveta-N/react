import { createSlice } from '@reduxjs/toolkit'

export const agreementSlice = createSlice({
  name: 'agreed',
  initialState: {
    value: false,
  },
  reducers: {
    checkboxClick: (state) => {
      state.value = !state.value
    },
  },
})

export const { checkboxClick} = agreementSlice.actions


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAgreed = (state) => state.agreed.value

export default agreementSlice.reducer
