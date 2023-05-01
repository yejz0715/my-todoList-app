import styled from "styled-components";

export const RadioLabel = styled.label`
  font-family: "SCoreDream-Medium";
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: ${(props) =>
    props.defaultChecked ? "var(--color-main)" : "var(--color-text-hint)"};
  cursor: pointer;
`;
export const RadioInput = styled.input`
  display: none;
`;
