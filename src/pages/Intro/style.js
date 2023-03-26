import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  width: 100vw;
  height: calc(100vh - 3.8125rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    padding: 0rem 1.25rem;
  }
`;

export const Img = styled.img`
  @media screen and (max-width: 768px) {
    width: 7.4375rem;
    height: 8.25rem;
  }
`;

export const IntroMsg = styled.label`
  font-family: "SCoreDream-Light";
  font-size: 1.75rem;
  line-height: 2.0625rem;
  margin: 3.75rem 0 2.5rem 0;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

export const Button = styled(Link)`
  width: 100%;
  max-width: 27.25rem;
  height: 3.375rem;
  font-family: "SCoreDream-Medium";
  font-size: 1.125rem;
  line-height: 1.3125rem;
  letter-spacing: 0.14em;
  color: #ffffff;
  background-color: var(--color-main);
  border-radius: 3rem;
  padding: 1rem 0;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    max-height: 3rem;
    line-height: 1.1875rem;
  }
`;
