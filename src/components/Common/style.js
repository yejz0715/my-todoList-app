import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.8125rem;
`;

export const Title = styled.img`
  margin-left: 2rem;

  @media screen and (max-width: 768px) {
    margin-left: 1.25rem;
  }
`;
