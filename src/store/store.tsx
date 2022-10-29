import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";
import appReducer from "../redux/reducers";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    appReducer,
  },
  preloadedState: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([baseApi.middleware]),
});

// export const initialStore = (preloadedState = {}) => {
//   return configureStore({
//     reducer: {
//       [baseApi.reducerPath]: baseApi.reducer,
//       appReducer,
//     },
//     preloadedState,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat([baseApi.middleware]),
//   });
// };

// export const store = initialStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
