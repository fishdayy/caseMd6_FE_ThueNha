import {configureStore} from '@reduxjs/toolkit';
import userSlice from "./userRedux/userSlice";
import homesSlice from "./homesRedux/homesSlice";
import homeSlice from "./homeRedux/homeSlice";
import imageSlice from "./imageRedux/imageSlice";
import categorySlice from "./categoryRedux/categorySlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        homes:homesSlice,
        home: homeSlice,
        image: imageSlice,
        category: categorySlice
    },
})
export default store