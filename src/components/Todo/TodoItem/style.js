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

export const ModifyWarp = styled.div`
  display: flex;
`;

export const ModifyButton = styled.img`
  width: 1.6087rem;
  height: 1.5rem;
  cursor: pointer;
`;
export const ModifyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  position: absolute;
  width: 100%;
  max-width: 3.0625rem;
  height: 100%;
  max-height: 3.75rem;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  background-color: #fff;
  border-radius: 0.25rem;
`;
export const UpdateButton = styled.div`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  font-family: "SCoreDream-Light";
  color: var(--color-text-serve);
  cursor: pointer;
`;
export const DeleteButton = styled.div`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  font-family: "SCoreDream-Light";
  color: var(--color-text-serve);
  cursor: pointer;
`;
