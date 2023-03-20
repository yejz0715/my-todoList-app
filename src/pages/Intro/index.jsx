import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/tootImg.svg";
import Header from "../../components/Common/Header";
import * as S from "./style";
const Intro = () => {
  return (
    <div>
      <Header />
      <S.Wrap>
        <S.Img src={img} alt="img" />
        <S.IntroP>나의 일상을 기록하고 관리해보세요!</S.IntroP>
        <Link to="/auth">
          <S.Button>시작하기</S.Button>
        </Link>
      </S.Wrap>
    </div>
  );
};

export default Intro;
