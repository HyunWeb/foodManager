import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.css";
import "./styles/fonts.css";
import MainPage from "./components/pages/MainPage";
import { Provider as ChakraProvider } from "./components/ui/provider";
import Loading from "./components/pages/Loading";
import Login from "./components/pages/Login";
import Nutrition from "./components/pages/Nutrition";
import Myfood from "./components/pages/Myfood";
import MyPage from "./components/pages/MyPage";
import SignUp from "./components/pages/SignUp";
import FilterPosts from "./components/pages/FilterPosts";
import View from "./components/pages/View";
//import { Provider } from "react-redux";
import store from "./store";
//import { CookiesProvider } from "react-cookie"; //추가

function App() {
  return (
    <ChakraProvider>
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
          <Route path="/main/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
