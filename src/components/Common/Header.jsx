import React from "react";
import * as S from "./style";
import img from "../../assets/headerToot.png";
const Header = () => {
  return (
    <S.Container>
      <S.Title src={img} alt="img" />
    </S.Container>
  );
};
export default Header;
