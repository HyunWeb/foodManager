import React, { useEffect } from "react";
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
import PasswordResetPage from "./components/pages/PasswordResetPage";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { setLoading, setRecipes } from "./slices/pageRenderSlice";

interface RecipeProps {
  id: number;
  title: string;
  img: string;
  alt?: string;
}
const themeExtend = {
  config: {
    initialColorMode: "light", // 애플리케이션 초기 색상 모드: 라이트 모드
    useSystemColorMode: false, // 시스템 색상 모드 무시 (애플리케이션 설정 적용)
  },
};

function App() {
  const dispatch = useDispatch();
  const { recipes, loading } = useSelector(
    (state: RootState) => state.pageRender
  );

  const api = process.env.REACT_APP_ROUTE;
  useEffect(() => {
    const fetchItems = async () => {
      try {
        dispatch(setLoading(true));
        const res = await axios.get(`${api}/api/items`, {
          withCredentials: true,
        });
        dispatch(setRecipes(res.data.data));
        dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching items: ", error);
      }
    };

    fetchItems();
  }, []);

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
          <Route path="/findpw" element={<PasswordResetPage />} />
          <Route path="/main/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
