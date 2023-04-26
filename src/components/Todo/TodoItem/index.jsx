import React, { useState } from "react";
import * as S from "./style";
import modifyBtn from "../../../assets/todo-item-modify-btn.png";

const TodoItem = () => {
  const [isTodoCheck, setTodoCheck] = useState(false);
  const [isShowModal, setShowModal] = useState(false);
  const [detailReadOnly, setDetailReadOnly] = useState(false);

  const handleTodoCheck = () => {
    setTodoCheck((prev) => !prev);
    setDetailReadOnly((prev) => !prev);
  };

  const showModifyOption = () => {
    setShowModal((prev) => !prev);
  };

  const handleUpdate = () => {
    setTodoCheck((prev) => !prev);
  };
  return (
    <S.Container onClick={() => setShowModal(false)} isTodoCheck={isTodoCheck}>
      <S.CheckBox onClick={handleTodoCheck} isTodoCheck={isTodoCheck} />
      <S.Contents>
        <S.Category>개발</S.Category>
        <S.Detail
          type="text"
          isTodoCheck={isTodoCheck}
          readOnly={detailReadOnly}
        />
      </S.Contents>
      <S.ModifyWarp>
        <S.ModifyButton
          src={modifyBtn}
          alt="modifyBtn"
          onClick={(e) => {
            showModifyOption();
            e.stopPropagation();
          }}
        />
        <S.ModifyBox isShowModal={isShowModal}>
          <S.UpdateButton onClick={handleUpdate}>수정</S.UpdateButton>
          <S.DeleteButton>삭제</S.DeleteButton>
        </S.ModifyBox>
      </S.ModifyWarp>
    </S.Container>
  );
};

export default TodoItem;
