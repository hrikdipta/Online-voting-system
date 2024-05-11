import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    loading:false,
    error:null
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoginRequest: state => {
            state.loading = true
        },
        userLoginSuccess: (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = null
        },
        userLoginFail: (state, action) => {
            state.loading = false
            state.error = action.payload
            state.user = null
        }
    }
})
export const { userLoginRequest, userLoginSuccess, userLoginFail } = userSlice.actions
export default userSlice.reducer