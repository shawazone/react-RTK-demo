import {createSlice}  from "@reduxjs/toolkit"
import { ordered as cakeOredered } from "../cake/cakeSlice"

const initialState = {
    numOfIcecream :20,
}

const iceCreamSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        ordered: (state) => {
            state.numOfIcecream --
        },
        restocked : (state , action) => {
            state.numOfIcecream += action.payload
        },
    },

    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecream--
    //     }
    // }



    // note that this extra reducer is inside the create slise block 
    extraReducers: (builder) => {
        builder.addCase(cakeOredered,state =>{
            state.numOfIcecream--
        })
    }
})
    
export default iceCreamSlice.reducer
export const { ordered , restocked} =  iceCreamSlice.actions