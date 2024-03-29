import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

export interface UserData {
    username: string
    password: string
    email?: string
}

export interface UserState {
    user: UserData | null
    isLoading: boolean
    error: string | null
}

const initialState: UserState = {
    user: null,
    isLoading: false,
    error: null,
}

// export const register = createAsyncThunk(
//     'user/register',
//     async (userData: UserData, { rejectWithValue }) => {
//         try {
//             const response = await registerUser(userData)
//             alert("注册成功")
//             return response.data
//         } catch (error: any) {
//             alert("注册失败")
//             return rejectWithValue(error.response.data)
//         }
//     }
// );

// export const login = createAsyncThunk(
//     'user/login',
//     async (userData: UserData, { rejectWithValue }) => {
//         try {
//             const response = await loginUser(userData)
//             alert("登录成功")
//             return response.data
//         } catch (error: any) {
//             alert("登录失败")
//             return rejectWithValue(error.response.data)
//         }
//     }
// )

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Actions for registration
        registerStart: (state) => {
            state.isLoading = true
        },
        registerSuccess: (state, action: PayloadAction<UserData>) => {
            state.isLoading = false
            state.user = action.payload
            state.error = null
            alert("注册成功")
        },
        registerFail: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
            alert("注册失败")
        },
        // Actions for login
        loginStart: (state) => {
            state.isLoading = true
        },
        loginSuccess: (state, action: PayloadAction<UserData>) => {
            state.isLoading = false
            state.user = action.payload
            state.error = null
            alert("登录成功")
        },
        loginFail: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
            alert("登录失败")
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         // 处理注册
    //         .addCase(register.pending, (state) => {
    //             state.isLoading = true
    //         })
    //         .addCase(register.fulfilled, (state, action) => {
    //             state.isLoading = false
    //             state.user = action.payload
    //             state.error = null
    //         })
    //         .addCase(register.rejected, (state, action) => {
    //             state.isLoading = false
    //             state.error = action.payload as string
    //         })
    //         // 处理登录
    //         .addCase(login.pending, (state) => {
    //             state.isLoading = true;
    //         })
    //         .addCase(login.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //             // state.user = action.payload; // 假设登录成功后返回的是用户信息
    //             state.error = null;
    //         })
    //         .addCase(login.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload as string; // 假设失败时返回的是错误信息
    //         })
    // }
})

export const {
    registerStart,
    registerSuccess,
    registerFail,
    loginStart,
    loginSuccess,
    loginFail,
} = userSlice.actions

export default userSlice.reducer