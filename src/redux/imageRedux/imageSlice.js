import {createSlice} from "@reduxjs/toolkit";
import {showImagesByHomeId, showListImage} from "../../service/imageService";

const initialState = {
    listImage: []
}
const imageSlice = createSlice({
    name: 'image',
    initialState,
    extraReducers: builder => {
        builder.addCase(showListImage.fulfilled, (state, action) => {
            state.listImage = [...action.payload]
        })
        builder.addCase(showImagesByHomeId.fulfilled, (state, action) => {
            state.listImage = [...action.payload]
        })
    }
})
export default imageSlice.reducer