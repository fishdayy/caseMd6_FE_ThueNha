import {createSlice} from "@reduxjs/toolkit";
import {
    createHome,
    showHome,
    showHomesByAddress,
    showHomesByCategory,
    showListHome,
    showYourHomes
} from "../../service/homeService";

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
        builder.addCase(showHome.fulfilled, (state, action) => {
            state.listHome = [...action.payload]
        })
        builder.addCase(showYourHomes.fulfilled, (state, action) => {
            state.listHome = [...action.payload]
        })
        builder.addCase(showHomesByCategory.fulfilled, (state, action) => {
            state.listHome = [...action.payload]
        })
        builder.addCase(showHomesByAddress.fulfilled, (state, action) => {
            state.listHome = [...action.payload]
        })
        builder.addCase(createHome.fulfilled, (state, action) => {
            state.listHome.push(action.payload)
        })
    }
})
export default homeSlice.reducer