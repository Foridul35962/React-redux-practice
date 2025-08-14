import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacy from "./privacy";


const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacy.reducer 
    }
});

export default counterStore;
