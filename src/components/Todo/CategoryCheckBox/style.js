import styled from "styled-components";

export const Label = styled.label`
  font-family: "SCoreDream-Medium";
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: ${(props) =>
    props.categoryValue === props.value
      ? "var(--color-main)"
      : "var(--color-text-hint)"};
  cursor: pointer;
`;
export const Input = styled.input`
  display: none;
`;
