import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Counter'




export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})
