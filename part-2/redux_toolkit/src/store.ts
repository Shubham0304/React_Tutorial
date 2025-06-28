import { configureStore, createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {value: {username: ""}}},
    reducers: {
        
    }
});

export const store = configureStore({});