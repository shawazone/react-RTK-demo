import {createSlice}  from "@reduxjs/toolkit"

//👇👇 initial state
const initialState = {
  numOfCakes: 10,
};


//👇👇 slice 
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--
    },
    restocked : (state, action) => {
        state.numOfCakes += action.payload
    },
  },
});
export default cakeSlice.reducer
export const { ordered , restocked} =  cakeSlice.actions


//👆👆 this slice take care of : 
// 👃 action const 
// 👃 action object 
// 👃 action creator 
// 👃 the switch statment in the reducer 
// 👃 handling imutable updates in the reducer 