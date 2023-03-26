import React from "react";
import img from "../../assets/toot-img.svg";
import * as S from "./style";
const Intro = () => {
  return (
    <S.Wrap>
      <S.Img src={img} alt="img" />
      <S.IntroMsg>나의 일상을 기록하고 관리해보세요!</S.IntroMsg>
      <S.Button to="/auth">시작하기</S.Button>
    </S.Wrap>
  );
};

export default Intro;
