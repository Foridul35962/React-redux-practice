import { createSlice } from "@reduxjs/toolkit";

const privacy = createSlice({
    name:'privacy',
    initialState: true,
    reducers:{
        isPrivacy: (state)=>{
            // console.log(state);
            return state=(!state);
        }
    }
});

export const privacyAction = privacy.actions;
export default privacy;