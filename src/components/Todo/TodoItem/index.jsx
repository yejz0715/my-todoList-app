import React from "react";
import * as S from "./style";
import modifyBtn from "../../../assets/todo-item-modify-btn.png";

const TodoItem = () => {
  const IsCheck = () => {};
  const ShowModifyOption = () => {};
  return (
    <>
      <S.Container>
        <S.CheckBox />
        <S.Contents>
          <S.Category>개발</S.Category>
          <S.Detail>todo 플젝 ui 완성</S.Detail>
        </S.Contents>
        <S.ModifyButton src={modifyBtn} alt="modifyBtn" />
      </S.Container>

      <S.Container>
        <S.CheckBox />
        <S.Contents>
          <S.Category>개발</S.Category>
          <S.Detail>todo 플젝 ui 완성</S.Detail>
        </S.Contents>
        <S.ModifyButton src={modifyBtn} alt="modifyBtn" />
      </S.Container>

      <S.Container>
        <S.CheckBox onChange={IsCheck} />
        <S.Contents>
          <S.Category>개발</S.Category>
          <S.Detail>todo 플젝 ui 완성</S.Detail>
        </S.Contents>
        <S.ModifyButton
          src={modifyBtn}
          alt="modifyBtn"
          onClick={ShowModifyOption}
        />
      </S.Container>
    </>
  );
};

export default TodoItem;
