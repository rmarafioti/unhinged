import { useState } from "react";
import "./App.css";
import store from "./assets/store";

function App() {
  return (
    <>
      <Provider store={store}></Provider>
    </>
  );
}

export default App;
