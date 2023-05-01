import React from "react";
import * as S from "./style";
import { useState } from "react";
const CategoryCheckBox = ({ categoryList }) => {
  const [categoryValue, setCategoryValue] = useState("");
  const handleCheckValue = (e) => {
    setCategoryValue(e.target.value);
  };
  return (
    <>
      {categoryList.map((item) => (
        <S.Label
          key={item.id}
          value={item.value}
          categoryValue={categoryValue}
          onChange={handleCheckValue}
        >
          <S.Input type="checkbox" name="category" />
          {item.text}
        </S.Label>
      ))}
    </>
  );
};
export default CategoryCheckBox;
