import {configureStore} from '@reduxjs/toolkit';
import userSlice from "./userRedux/userSlice";
import homeSlice from "./homeRedux/homeSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        home: homeSlice
    },
})
export default store