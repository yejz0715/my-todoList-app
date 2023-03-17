import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Common/Header";
import * as S from "./style";
const Intro = () => {
  return (
    <div>
      <Header />
      <S.Wrap>
        <S.Img></S.Img>
        <Link to="/account/login">
          <S.Button>시작하기</S.Button>
        </Link>
      </S.Wrap>
    </div>
  );
};

export default Intro;
