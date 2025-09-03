import {createSlice} from "@reduxjs/toolkit"

const initialState = {
      status:false
}

const expandSlice = createSlice({
    name:"expand",
    initialState,

    reducers:{
            expand: (state) =>{
                state.status = true
            },

        collapse: (state)=>{
            state.status = false
        }
    }
})

export const {expand, collapse} = expandSlice.actions
export default expandSlice.reducer