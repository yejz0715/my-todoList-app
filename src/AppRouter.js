import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Auth from "./pages/Auth";
import Intro from "./pages/Intro";
import Todo from "./pages/Main";

const AppRouter = () => {
  // 로그인 여부 - redux에서 정보를 가져와야함
  let isLogin = false;

  // 비로그인 상태일 때
  if (!isLogin) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    );
  }

  // 로그인 상태일 때
  return (
    <Router>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<Navigate replace to="/todo" />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
