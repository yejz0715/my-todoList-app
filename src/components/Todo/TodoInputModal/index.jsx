import React, { useState } from "react";
import * as S from "./style";
import CategoryRadioButton from "../CategoryRadioButton";
import EtcRadioButton from "../CategoryRadioButton/EtcRadio";
const TodoInputModal = ({ setInputModalOpen, nowDate, text }) => {
  const [inputText, setInputText] = useState("");
  const [categoryChecked, setCategoryChecked] = useState("");
  const [etcValue, setEtcValue] = useState("");
  const handleCloseModal = () => {
    setInputModalOpen(false);
  };

  const handleAddTodoContent = () => {
    handleAddTodoContent(false);
  };

  const handleText = (e) => {
    setInputText(e.target.value);
  };

  const handleCategoryChecked = (e) => {
    setCategoryChecked(e.target.value);
  };
  const handleEtcValue = (e) => {
    setEtcValue(e.target.value);
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
          <S.Date>{nowDate}</S.Date>
        </S.DateBox>
        <S.ContentBox>
          <S.Title>내용</S.Title>
          <S.CategoryBox>
            <CategoryRadioButton
              name="category"
              value="daily"
              text="일상"
              defaultChecked={categoryChecked === "daily"}
              onChange={handleCategoryChecked}
            />
            <CategoryRadioButton
              name="category"
              value="study"
              text="공부"
              defaultChecked={categoryChecked === "study"}
              onChange={handleCategoryChecked}
            />
            <CategoryRadioButton
              name="category"
              value="hobby"
              text="취미"
              defaultChecked={categoryChecked === "hobby"}
              onChange={handleCategoryChecked}
            />
            <EtcRadioButton
              name="category"
              value="etc"
              text="기타"
              defaultChecked={categoryChecked === "etc"}
              onChange={handleCategoryChecked}
              handleEtcValue={handleEtcValue}
              etcValue={etcValue}
            />
          </S.CategoryBox>
          <S.Content
            type="text"
            value={inputText}
            onChange={handleText}
            placeholder="할 일을 입력해주세요."
          />
          {inputText === "" && categoryChecked === "" ? (
            <S.WarningMsg>내용을 입력해주세요!</S.WarningMsg>
          ) : null}
        </S.ContentBox>
        <S.AddButton onClick={handleAddTodoContent}>등록</S.AddButton>
      </S.AddWrap>
    </S.Container>
  );
};

export default TodoInputModal;
