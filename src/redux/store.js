import { configureStore } from "@reduxjs/toolkit";
import sportclubReducer from "../redux/feature/sportclub/SportClubSlice"; // Adjust the import path as necessary

const store = configureStore({
  reducer: {
    sportclubs: sportclubReducer,
  },
});

export default store;
