import React from "react";
import * as S from "./style";
const TodoInput = () => {
  return (
    <S.Container>
      <S.AddWrap>
        <S.CloseButton />
        <S.Title>날짜</S.Title>
        <S.Date>2023.03.21</S.Date>
        <S.Title>내용</S.Title>

        <S.Input placeHolder="할 일을 입력하세요" />
        <S.Msg></S.Msg>
        <S.Button>등록</S.Button>
      </S.AddWrap>
    </S.Container>
  );
};

export default TodoInput;
