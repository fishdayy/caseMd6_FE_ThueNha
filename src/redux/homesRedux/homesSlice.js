import {createSlice} from "@reduxjs/toolkit";
import {post} from "../../service/homesService";

const initialState={
    homes:[]
}
const homesSlice = createSlice({
    name: 'homes',
    initialState,
    extraReducers: builder => {
        builder.addCase(post.fulfilled, (state, action) => {
            state.homes.push(action.payload)
        })
    }
})
export default homesSlice.reducer