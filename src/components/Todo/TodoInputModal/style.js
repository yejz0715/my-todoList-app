import styled from "styled-components";
import { BsX } from "react-icons/bs";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: rgba(153, 153, 153, 0.2);
  backdrop-filter: blur(10px);
`;

export const AddWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* max-width: 33.0625rem; -33 */
  max-width: 31rem;
  height: 100%;
  /* max-height: 30.875rem;-8 */
  max-height: 30.375rem;
  background-color: var(--color-background);
  border-radius: 2.25rem;
`;

export const CloseBox = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  padding: 2rem 2rem 0.625rem 0;
`;
export const CloseButton = styled(BsX)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 27rem;
  margin-bottom: 2.25rem;
`;

export const Title = styled.label`
  font-family: "SCoreDream-Medium";
  font-size: 1rem;
  line-height: 1.1875rem;
`;

export const Date = styled.label`
  padding: 1.125rem 0 1.0625rem 1rem;
  font-family: "SCoreDream-Light";
  font-size: 1rem;
  line-height: 1.1875rem;
  background-color: rgba(217, 217, 217, 0.15);
  border-radius: 3rem;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 27rem;
  margin-bottom: 3.3175rem;
`;

export const Category = styled.label`
  font-family: "SCoreDream-Medium";
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: var(--color-text-hint);
  margin-top: 0.25rem;
`;

export const Content = styled.input`
  padding: 1.125rem 0 1.0625rem 1rem;
  font-family: "SCoreDream-Light";
  color: var(--color-text-hint);
  font-size: 1rem;
  line-height: 1.1875rem;
  background-color: rgba(217, 217, 217, 0.15);
  border-radius: 3rem;
`;

export const WarningMsg = styled.label`
  font-family: "SCoreDream-Light";
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: var(--color-text-warning);
`;

export const AddButton = styled.button`
  width: 100%;
  max-width: 27rem;
  height: 100%;
  max-height: 3.375rem;
  font-family: "SCoreDream-Medium";
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #fff;
  border-radius: 3rem;
  background-color: var(--color-main);
  cursor: pointer;
`;
