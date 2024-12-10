import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import { Provider } from "../src/Provider";
function App({ component, pageProp }) {
  return (
    <provider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </provider>
  );
}

export default App;
