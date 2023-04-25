import React from "react";
import * as S from "./style";
const TodoInputModal = ({ setInputModalOpen }) => {
  const handleCloseModal = () => {
    setInputModalOpen(false);
  };

  const handleAddTodoContent = () => {
    handleAddTodoContent(false);
  };

  return (
    <S.Container
      onClick={() => {
        handleCloseModal();
      }}
    >
      <S.AddWrap
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
          <S.Content type="text" placeholder="할 일을 입력해주세요." />
          <S.WarningMsg>내용을 입력해주세요!</S.WarningMsg>
        </S.ContentBox>
        <S.AddButton onClick={handleAddTodoContent}>등록</S.AddButton>
      </S.AddWrap>
    </S.Container>
  );
};

export default TodoInputModal;
