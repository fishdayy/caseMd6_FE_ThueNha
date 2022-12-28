import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const showListHome = createAsyncThunk(
    'home/showListHome',
    async (data) => {
        const res = await axios.get('http://localhost:8080/homes')
        return res.data
    }
)