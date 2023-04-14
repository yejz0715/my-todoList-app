import styled from "styled-components";
import { BsPlus } from "react-icons/bs";

export const TodoContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 3.8125rem);
  background-color: transparent;
`;

export const EyeIcon = styled.img`
  width: 74.37px;
  height: 28.73px;
  position: absolute;
  top: 58px;
`;
export const MouthIcon = styled.img`
  width: 81.49px;
  height: 40.89px;
  position: absolute;
  top: 999px;
`;

export const TodoWarp = styled.div`
  display: flex;
  width: 100%;
  max-width: 77.6875rem;
  height: 100%;
  max-height: 48.5rem;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3.125rem;
`;
export const CalendarWarp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Calendar = styled.div``;

export const Icons = styled.div``;

export const TodoHeaderWarp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 28.625rem;
  margin-bottom: 1.25rem;
`;
export const TodoHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Date = styled.label`
  font-size: 1.5rem;
  line-height: 1.8125rem;
`;

export const Category = styled.label`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: var(--color-text-hint);
`;

export const InsertButton = styled(BsPlus)`
  width: 100%;
  max-width: 3rem;
  height: 100%;
  max-height: 3rem;
  color: white;
  background-color: var(--color-serve-one);
  border-radius: 1.25rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
