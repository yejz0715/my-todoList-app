import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding: 0 18rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  height: 52rem;
`;

//radioType
export const RadioTab = styled.div`
  display: flex;
  gap: 3rem;
  width: 44rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const InpRadio = styled.input`
  appearance: none;
`;

export const InpRadioLabel = styled.label`
  padding: 0 1rem 1rem 0;
  line-height: 2rem;
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => (props.checked ? "#333" : "#999999")};
  border-bottom: ${(props) => (props.checked ? "4px solid #5089c6" : null)};
  cursor: pointer;
`;

//input
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const InputLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const InputBox = styled.input`
  width: 44rem;
  height: 5.4rem;
  background-color: rgba(217, 217, 217, 0.15);
  font-size: 1.6rem;
  border-radius: 5rem;
  color: #999999;
  padding: 2rem;
`;

export const SubmitButton = styled.input`
  width: 44rem;
  height: 5.4rem;
  margin-top: 4rem;
  background-color: #5089c6;
  border-radius: 5rem;
  font-size: 2rem;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 39rem;
  height: 43rem;
`;
