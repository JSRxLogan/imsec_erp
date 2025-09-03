import {configureStore} from "@reduxjs/toolkit"
import expandReducer from "./slices"

const store = configureStore({
    reducer: {
         expand : expandReducer
        }
})

export default store