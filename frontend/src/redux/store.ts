import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer:{
        auth : authReducer,
    }
})
// Tạo kiểu riêng để dùng trong hook
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch