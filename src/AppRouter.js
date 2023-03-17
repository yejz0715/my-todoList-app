import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

import Intro from "./pages/Intro";
import Todo from "./pages/Main";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/account/login" element={<Auth />}></Route>

        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </Router>
  );
};
export default AppRouter;
