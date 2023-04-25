import React, { useState } from "react";
import * as S from "./style";
import eyeIcon from "../../assets/todo-icon-eye.png";
import mouthIcon from "../../assets/todo-icon-mouth.png";
import TodoTemplate from "../../components/Todo/TodoTemplate";
import TodoList from "../../components/Todo/TodoList";
import TodoCalendar from "../../components/Todo/TodoCalendar";
import TodoInputModal from "../../components/Todo/TodoInputModal";
const Todo = () => {
  const [InputModalOpen, setInputModalOpen] = useState(false);

  const showTodoInputModal = () => {
    setInputModalOpen(true);
  };

  return (
    <>
      {InputModalOpen && (
        <TodoInputModal setInputModalOpen={setInputModalOpen} />
      )}

      <S.TodoContainer>
        <S.TodoWarp>
          <S.EyeIcon src={eyeIcon} alt="eyeIcon" />
          <S.CalendarWarp>
            <TodoCalendar />
            <S.Icons></S.Icons>
          </S.CalendarWarp>

          <TodoTemplate>
            <S.TodoHeaderWarp>
              <S.TodoHeaderBox>
                <S.Date>2023.00.00</S.Date>
                <S.Category>일상 취미 공부 기타</S.Category>
              </S.TodoHeaderBox>
              <S.InsertButton onClick={showTodoInputModal} />
            </S.TodoHeaderWarp>

            <TodoList />
          </TodoTemplate>
          <S.MouthIcon src={mouthIcon} alt="mouthIcon" />
        </S.TodoWarp>
      </S.TodoContainer>
    </>
  );
};

export default Todo;
