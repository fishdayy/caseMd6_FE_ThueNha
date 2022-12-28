import {createSlice} from "@reduxjs/toolkit";
import {showListHome} from "../../service/homeService";

const initialState = {
    listHome: []
}
const homeSlice = createSlice({
    name: 'home',
    initialState,
    extraReducers: builder => {
        builder.addCase(showListHome.fulfilled, (state, action) => {
            state.listHome = [...action.payload]
        })
    }
})
export default homeSlice.reducer