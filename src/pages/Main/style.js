import styled from "styled-components";
import { BsPlus } from "react-icons/bs";

export const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 3.8125rem);
  background-color: #f4f4f4f4;
`;

export const TodoWarp = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 77.6875rem;
  height: 100%;
  max-height: 740px;
  /* max-height: 48.5rem; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3.125rem;
  background-color: var(--color-background);
`;

export const EyeIcon = styled.img`
  position: absolute;
  top: -2.7956rem;
  left: 0rem;
  width: 4.6481rem;
  height: 1.7956rem;
`;
export const MouthIcon = styled.img`
  position: absolute;
  bottom: -3.56rem;
  right: 0rem;
  width: 5.0931rem;
  height: 2.5556rem;
`;

export const CalendarWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

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
  color: #fff;
  background-color: var(--color-serve-one);
  border-radius: 1.25rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
