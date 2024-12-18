import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.css";
import "./styles/fonts.css";
import MainPage from "./components/pages/MainPage";
import { Provider } from "./components/ui/provider";
import Loading from "./components/pages/Loading";
import Login from "./components/pages/Login";
import Nutrition from "./components/pages/Nutrition";
import Myfood from "./components/pages/Myfood";
import MyPage from "./components/pages/MyPage";
import SignUp from "./components/pages/SignUp";
import FilterPosts from "./components/pages/FilterPosts";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/myfood" element={<Myfood />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/:filter" element={<FilterPosts />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
