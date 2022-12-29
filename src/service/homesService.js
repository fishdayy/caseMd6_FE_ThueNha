import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const post =createAsyncThunk(
    'homes/post',
    async (data)=>{
        const res = await axios.post("http://localhost:8080/homes",data)
        return res.data
    }
)