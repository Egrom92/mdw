import {configureStore} from "@reduxjs/toolkit";
import globalReducer from "./global";
import pagesReducer from "./pages";
import guestReducer from "./guest";

const store = configureStore({
  reducer: {
    global: globalReducer,
    pages: pagesReducer,
    guest: guestReducer,
  },
});

export default store;
