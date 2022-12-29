import {configureStore} from '@reduxjs/toolkit';
import userSlice from "./userRedux/userSlice";
import homesSlice from "./homesRedux/homesSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        homes:homesSlice
    },
})
export default store