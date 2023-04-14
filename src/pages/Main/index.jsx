import React from "react";
import * as S from "./style";
import eyeIcon from "../../assets/todo-icon-eye.png";
import mouthIcon from "../../assets/todo-icon-mouth.png";
import TodoTemplate from "../../components/Todo/TodoTemplate";
import TodoList from "../../components/Todo/TodoList";
import TodoCalendar from "../../components/Todo/TodoCalendar";
const Todo = () => {
  const showTodoInputModal = () => {};

  return (
    <S.TodoContainer>
      <S.TodoWarp>
        <S.CalendarWarp>
          {/* <S.EyeIcon src={eyeIcon} alt="eyeIcon"/> */}
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
        {/* <S.MouthIcon src={mouthIcon} alt="mouthIcon"/> */}
      </S.TodoWarp>
    </S.TodoContainer>
  );
};

export default Todo;
