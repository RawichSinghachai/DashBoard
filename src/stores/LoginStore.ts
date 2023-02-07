import { createSlice } from "@reduxjs/toolkit";

const admin = {
    user:'test',
    password:'12345',
    status:true,// true for test
}


export const LoginStore = createSlice({
    name:'LoginStore',
    initialState:admin,
    reducers:{
      check:(state,action) => {
        if (action.payload[0] === state.user && action.payload[1] === state.password){
            state.status = true
        }else{
            state.status = false
        }      
      },

    }
})

export const {check} = LoginStore.actions
export default LoginStore.reducer