import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import photoReducer from "./features/photos";
import { QueryClient, QueryClientProvider  } from "@tanstack/react-query";
const queryClient = new QueryClient();
const store = configureStore({
  reducer: {
    photo: photoReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </QueryClientProvider>
);
