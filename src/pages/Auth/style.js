import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: calc(100vh - 3.8125rem);

  @media screen and (max-width: 768px) {
    padding: 0rem 1.25rem;
  }
`;

export const AuthWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  max-width: 27.25rem;
  height: 35.5625rem;
`;

//radioType
export const RadioTab = styled.div`
  display: flex;
  gap: 2.25rem;
  width: 100%;
  max-width: 27.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export const InpRadio = styled.input`
  appearance: none;
`;

export const InpRadioLabel = styled.label`
  font-family: "SCoreDream-Medium";
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${(props) =>
    props.checked ? "var(--color-text)" : "var(--color-text-hint)"};
  border-bottom: ${(props) =>
    props.checked ? "4px solid var(--color-main)" : null};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.1875rem;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    gap: 1.75rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-family: "SCoreDream-Medium";
  font-size: 1rem;
  line-height: 1.1875rem;

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.0625rem;
  }
`;

export const InputBox = styled.input`
  width: 100%;
  max-width: 27.25rem;
  height: 3.375rem;
  padding: 1rem;
  background-color: rgba(217, 217, 217, 0.15);
  font-family: "SCoreDream-Light";
  font-size: 1rem;
  line-height: 1.1875rem;
  border-radius: 3rem;

  @media screen and (max-width: 768px) {
    height: 3rem;
    font-size: 0.875rem;
    line-height: 1.0625rem;
  }
`;

export const Msg = styled.label`
  font-family: "SCoreDream-Light";
  color: var(--color-text-warning); //기본 | 경고-#c65050;
  font-size: 0.75rem;
  line-height: 0.875rem;
`;

export const SubmitButton = styled.input`
  width: 100%;
  max-width: 27.25rem;
  height: 3.375rem;
  background-color: var(--color-main);
  border-radius: 3rem;
  font-family: "SCoreDream-Medium";
  font-size: 1.125rem;
  line-height: 1.3125rem;
  letter-spacing: 0.14em;
  color: #ffffff;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: 3rem;
    font-size: 1rem;
    line-height: 1.1875rem;
  }
`;

export const Img = styled.img`
  width: 24.3794rem;
  height: 27.0475rem;
  margin-bottom: 5.125rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
