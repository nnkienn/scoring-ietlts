// Import function tạo slice + action từ Redux Toolkit
import { User } from '@/types/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Import kiểu dữ liệu user đã định nghĩa riêng

// Đây là kiểu dữ liệu của slice "auth" trong Redux
interface AuthState {
  user: User | null      // null = chưa đăng nhập
  isLoggedIn: boolean    // flag kiểm tra trạng thái login
}

// Đây là trạng thái khởi tạo ban đầu
const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
}

// Tạo authSlice dùng createSlice
const authSlice = createSlice({
  name: 'auth',       // tên slice
  initialState,       // trạng thái khởi đầu
  reducers: {
    // Action login: nhận user và cập nhật state
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isLoggedIn = true
    },
    // Action logout: xóa thông tin user
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    },
  },
})

// Export các action để dispatch khi cần
export const { login, logout } = authSlice.actions

// Export reducer để thêm vào Redux store
export default authSlice.reducer
