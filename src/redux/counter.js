import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  value: 0,
}

const json = window.localStorage.getItem("payload");
if (json !== null && json !== ""){
    const payload = JSON.parse(json);
    initialState.value = payload.counter.value;
}



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer