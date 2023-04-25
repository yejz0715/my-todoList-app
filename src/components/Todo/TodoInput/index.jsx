import React from "react";
import * as S from "./style";
const TodoInput = ({ setInputModalOpen }) => {
  const handleCloseModal = () => {
    setInputModalOpen(false);
  };

  const handleAddTodoContent = () => {
    handleAddTodoContent(false);
  };

  return (
    <S.Container>
      <S.AddWrap>
        <S.CloseBox>
          <S.CloseButton onClick={handleCloseModal} />
        </S.CloseBox>
        <S.DateBox>
          <S.Title>날짜</S.Title>
          <S.Date>2023.03.21</S.Date>
        </S.DateBox>
        <S.ContentBox>
          <S.Title>내용</S.Title>
          <S.Category>일상 취미 공부 기타</S.Category>
          <S.Input type="text" placeholder="할 일을 입력해주세요." />
          <S.Msg>내용을 입력해주세요!</S.Msg>
        </S.ContentBox>
        <S.Button onClick={handleAddTodoContent}>등록</S.Button>
      </S.AddWrap>
    </S.Container>
  );
};

export default TodoInput;
