import { createSlice } from "@reduxjs/toolkit";
export const catslice = createSlice({
    name : 'cats',
    initialState : {
        cats  : [],
        isLoading : false
    },
    reducers : {
        getCatsFetch : (state) => {
            state.isLoading = true
        },
        getCatsSuccess : (state,action) => {
            state.cats = action.payload;
            state.isLoading = false;
        },
        getCatsFailure : (state) => {
            state.isLoading = false;
        }
    }
});
export const {getCatsFetch,getCatsSuccess,getCatsFailure} = catslice.actions;

export default catslice.reducer;