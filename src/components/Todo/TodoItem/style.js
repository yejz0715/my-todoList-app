import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 28.625rem;
  height: 100%;
  max-height: 4.4375rem;
  padding: 0 1.0725rem;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.25rem;
`;
export const CheckBox = styled.div`
  width: 1.6087rem;
  height: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  cursor: pointer;
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 21.3181rem;
  gap: 0.375rem;
`;
export const Category = styled.label`
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-family: "SCoreDream-Light";
  color: var(--color-text-serve);
`;
export const Detail = styled.label`
  font-size: 1rem;
  line-height: 1.1875rem;
`;

export const ModifyButton = styled.img`
  width: 1.6087rem;
  height: 1.5rem;
  cursor: pointer;
`;
