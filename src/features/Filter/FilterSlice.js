import { apiSlice } from "../api/apiSlice"

const initialState={
    category:"All",
    subCategory:[],
    sort:'byRating'
}

export const filterSlice= apiSlice({
    name:"filterSlice",
    initialState,
    reducers:{
        changeStatus:(state,action)=>{
            state.category = action.payload.category
        }
    }
})

export const {changeStatus}= filterSlice.actions
export default filterSlice.reducer