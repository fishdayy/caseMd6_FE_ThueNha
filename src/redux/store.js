import {configureStore} from '@reduxjs/toolkit';
import userSlice from "./userRedux/userSlice";

const store = configureStore({
    reducer: {
        user: userSlice
    },
})
export default store