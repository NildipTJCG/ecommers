import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "../fucher/counter";

export const store = configureStore({
  reducer: {
    counter: counterReduser,
  },
});
