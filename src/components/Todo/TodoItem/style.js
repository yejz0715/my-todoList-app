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
  background-color: ${(props) =>
    props.isTodoCheck === true ? "#f4f4f4" : "#fff"};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.25rem;
`;
export const CheckBox = styled.div`
  width: 1.6087rem;
  height: 1.5rem;
  background-color: ${(props) =>
    props.isTodoCheck === true ? "var(--color-main)" : "none"};
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
export const Detail = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: ${(props) =>
    props.detailReadOnly === true ? "var(--color-text-hint)" : "#333"};
  text-decoration: ${(props) =>
    props.detailReadOnly === true ? "line-through" : "none"};
`;

export const ModifyWarp = styled.div`
  display: flex;
  position: relative;
`;

export const ModifyButton = styled.img`
  width: 100%;
  height: 100%;
  max-width: 1.6087rem;
  max-height: 1.5rem;
  cursor: pointer;
`;
export const ModifyBox = styled.div`
  display: ${(props) => (props.isShowModal === true ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  position: absolute;
  top: -1.125rem;
  left: 0.9375rem;
  width: 3.0625rem;
  height: 3.75rem;
  z-index: 99;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  background-color: #fff;
  border-radius: 0.25rem;
  margin-right: 0.1875rem;
`;
export const UpdateButton = styled.label`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  font-family: "SCoreDream-Light";
  color: var(--color-text-serve);
  cursor: pointer;
`;
export const DeleteButton = styled.label`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  font-family: "SCoreDream-Light";
  color: var(--color-text-serve);
  cursor: pointer;
`;
