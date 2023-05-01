import React from "react";
import styled from "styled-components";
import CategoryRadioButton from "./index";

const EtcRadioButton = ({
  name,
  value,
  text,
  defaultChecked,
  onChange,
  handleEtcValue,
  etcValue,
}) => {
  return (
    <EtcContainer>
      <CategoryRadioButton
        name={name}
        value={value}
        text={text}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      {defaultChecked ? (
        <RadioInput type="text" value={etcValue} onChange={handleEtcValue} />
      ) : null}
    </EtcContainer>
  );
};
export const RadioInput = styled.input`
  width: 3rem;
  border-bottom: 1px solid gray;
  padding-left: 0.4rem;
  margin-bottom: 2px;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  cursor: pointer;
`;
export const EtcContainer = styled.div``;

export default EtcRadioButton;
