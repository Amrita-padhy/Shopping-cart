import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { AppContextProvider } from "./context";

function App() {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  );
}

export default App;
