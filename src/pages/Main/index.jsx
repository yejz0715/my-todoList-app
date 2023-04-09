import React from "react";
import * as S from "./style";
import TodoTemplate from "../../components/Todo/TodoTemplate";
import TodoList from "../../components/Todo/TodoList";
import TodoCalendar from "../../components/Todo/TodoCalendar";
const Todo = () => {
  return (
    <S.TodoContainer>
      <S.CalendarWarp>
        <TodoCalendar />
        <S.Icons></S.Icons>
      </S.CalendarWarp>
      <TodoTemplate>
        <S.TodoHeaderBox>
          <S.Date>2023.00.00</S.Date>
          <S.Category>category</S.Category>
          <button>+</button>
        </S.TodoHeaderBox>
      </TodoTemplate>
      <TodoList />
    </S.TodoContainer>
  );
};

export default Todo;
