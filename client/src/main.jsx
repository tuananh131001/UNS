import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import popupReducer from "./features/popupSlice";
const queryClient = new QueryClient();

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
        <ReactQueryDevtools />
      </React.StrictMode>
    </QueryClientProvider>
  </Provider>
);
