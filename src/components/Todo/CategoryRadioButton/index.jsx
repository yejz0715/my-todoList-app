import React from "react";
import * as S from "./style";
const CategoryRadioButton = ({
  name,
  value,
  text,
  defaultChecked,
  onChange,
}) => {
  return (
    <S.RadioLabel defaultChecked={defaultChecked}>
      <S.RadioInput
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      {text}
    </S.RadioLabel>
  );
};
export default CategoryRadioButton;
