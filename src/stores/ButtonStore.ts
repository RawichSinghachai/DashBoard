import { createSlice } from "@reduxjs/toolkit";

const buttondata = [
    {id:1,name:'BUTTON 1',value:'OFF'},
    {id:2,name:'BUTTON 2',value:'OFF'},
    {id:3,name:'BUTTON 3',value:'OFF'},
    {id:4,name:'BUTTON 4',value:'OFF'},
    {id:5,name:'BUTTON 5',value:'OFF'},
    {id:6,name:'BUTTON 6',value:'OFF'},
    {id:7,name:'BUTTON 7',value:'OFF'},
    {id:8,name:'BUTTON 8',value:'OFF'},
    {id:9,name:'BUTTON 9',value:'OFF'},
    {id:10,name:'BUTTON 10',value:'OFF'},
    {id:11,name:'BUTTON 11',value:'OFF'},
    {id:12,name:'BUTTON 12',value:'OFF'},
  ]





export const ButtonStore = createSlice({
    name:'ButtonStore',
    initialState:buttondata,
    reducers:{
      on:(state,action)=>{
        state[action.payload-1].value = 'ON'
      },


      off:(state,action)=>{
        state[action.payload-1].value = 'OFF'
      },
    }
})

export const {on,off} = ButtonStore.actions
export default ButtonStore.reducer