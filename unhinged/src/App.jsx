import { useState } from "react";
import "./App.css";

import store from "./assets/store";
import { Provider } from "react-redux";
import Gallery from "./Gallery";

function App() {
  return (
    <>
      <Provider store={store}>
        <Gallery />
      </Provider>
    </>
  );
}

export default App;
