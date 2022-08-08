import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  imageID: 123,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    toggleModal: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.showModal = !state.showModal;
    },
    setId: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.imageID = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModal,setId } = popupSlice.actions;

export default popupSlice.reducer;
