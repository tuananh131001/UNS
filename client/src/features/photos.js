import { createSlice } from "@reduxjs/toolkit";

const photoSlide = createSlice({
  name: "photo",
  initialState: { value: { name: "Dog", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Yen_Bai_-_dogs_-_P1390010.JPG" } },
  reducers:{
    addPhoto:(state,action) =>{
        return {...state,value: action.payload}
    },
    
  }
});

export default photoSlide.reducer