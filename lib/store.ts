import { configureStore } from "@reduxjs/toolkit";
import agentsReducer from "./agentsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      agents: agentsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
