import {createSlice} from "@reduxjs/toolkit";
import {changePassword, login, register} from "../../service/userService";

const initialState = {
    userNow: JSON.parse(localStorage.getItem('user'))
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.userNow = action.payload
            console.log(action.payload)
            localStorage.setItem('user', JSON.stringify(action.payload))
            localStorage.setItem('userId',action.payload.userFind[0].id)
        })
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.userNow = action.payload.user
            localStorage.setItem('user', JSON.stringify(action.payload))
        })
    }
})
export default userSlice.reducer