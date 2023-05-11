


import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    // cake is the key of cake reducer uwuwuwuwuwu
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  }
})

export default store