import { createSlice } from '@reduxjs/toolkit'

interface Counter {
    value: number
}

const initialState: Counter = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer