import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    count:0
}
export const counterSlice= createSlice({
    name:'counter',
    initialState,
    reducers:{
        incriment:(state)=>{
            state.count = state.count+1;
        },
        decriment:(state)=>{state.count = state.count-1},
        incrimentbyamount:(state,action)=>{state.count+=action.plylod}
    }
})

export const {incriment,decriment,incrimentbyamount}=counterSlice.actions
export default counterSlice.reducer;
