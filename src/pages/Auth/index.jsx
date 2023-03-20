import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { userApi } from "../../apis";
import img from "../../assets/tootImg.svg";
import Header from "../../components/Common/Header";
import * as S from "./style";

const Auth = () => {
  const [radioType, setRadioType] = useState("signIn");
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const navigate = useNavigate();

  const handleChangeRadioType = (e) => {
    setRadioType(e.target.value);
  };

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    if (id === "id") {
      setUserId(value);
    } else if (id === "password") {
      setUserPassword(value);
    } else if (id === "passwordCheck") {
      setUserPasswordCheck(value);
    }
  };

  //유효성 id, pw
  const isIdValid = () => {
    const regexId = /^[a-z0-9]{5,}$/;
    if (regexId.test(userId)) {
      return true;
    }
  };
  const isPwValid = () => {
    let regexPw = /^[\da-zA-Z!@#]{8,}$/;
    if (regexPw.test(userPassword)) {
      return true;
    }
  };

  const handleSubmit = (e) => {
    //새로고침 막기
    e.preventDefault();

    radioType === "signIn" ? handleSignIn() : handleSignUp();
  };

  //초기화
  const handleReset = () => {
    setUserId("");
    setUserPassword("");
    setUserPasswordCheck("");
  };

  //로그인
  const handleSignIn = async () => {
    if (!isIdValid() || !isPwValid()) {
      alert("아이디와 비밀번호를 확인해주세요");
      return;
    }

    await userApi
      .logIn(userId, userPassword)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        console.log(data.token);
      })
      .catch((error) => console.log(error));
  };

  //회원가입
  const handleSignUp = async () => {
    if (!isIdValid()) {
      alert("아이디를 확인해주세요");
      return;
    } else if (!isPwValid() || userPassword !== userPasswordCheck) {
      alert("비밀번호를 확인해주세요");
      return;
    }

    // console.log("signup : ", user);

    // if (!user || user === {}) {
    //   alert("user 없음");
    //   return;
    // }

    await userApi
      .signUp({
        username: userId,
        password: userPassword,
      })
      .then(({ data }) => {
        if (data.msg === "Account Successfully Created!") {
          alert("회원가입이 완료되었습니다. ");
          navigate("/todo");
          console.log(data);
        } else if (data.msg === "User Already Exists") {
          alert("중복된 아이디입니다. 다시 입력해주세요");
          handleReset();
        }
      })
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   userApi
  //     .getAllUsers()
  //     .then(({ data }) => console.log("success: ", data))
  //     .catch((error) => console.log("fail : ", error));
  // }, []);

  return (
    <>
      <Header />
      <S.Wrap>
        <S.Container>
          <S.RadioTab>
            <S.InpRadioLabel
              htmlFor="signIn"
              checked={radioType === "signIn" ? true : false}
            >
              <S.InpRadio
                type="radio"
                name="radioType"
                id="signIn"
                value="signIn"
                checked="checked"
                onChange={handleChangeRadioType}
              />
              로그인
            </S.InpRadioLabel>
            <S.InpRadioLabel
              htmlFor="signUp"
              checked={radioType === "signUp" ? true : false}
            >
              <S.InpRadio
                type="radio"
                name="radioType"
                id="signUp"
                value="signUp"
                onChange={handleChangeRadioType}
              />
              회원가입
            </S.InpRadioLabel>
          </S.RadioTab>
          <form>
            <S.InputContainer>
              <S.InputGroup>
                <S.InputLabel>아이디</S.InputLabel>
                <S.InputBox
                  type="text"
                  id="id"
                  value={userId}
                  placeholder="아이디를 입력해주세요!"
                  onChange={handleChangeInput}
                  defaultChecked
                />
              </S.InputGroup>
              <S.InputGroup>
                <S.InputLabel>비밀번호</S.InputLabel>
                <S.InputBox
                  type="password"
                  id="password"
                  value={userPassword}
                  placeholder="비밀번호를 입력해주세요!"
                  onChange={handleChangeInput}
                />
              </S.InputGroup>
              {radioType === "signUp" ? (
                <S.InputGroup>
                  <S.InputLabel>비밀번호 확인</S.InputLabel>
                  <S.InputBox
                    type="password"
                    id="passwordCheck"
                    value={userPasswordCheck}
                    placeholder="비밀번호를 한번 더 입력해주세요!"
                    onChange={handleChangeInput}
                  />
                </S.InputGroup>
              ) : null}
            </S.InputContainer>
            <S.SubmitButton
              type="submit"
              value={radioType === "signIn" ? "로그인" : "회원가입"}
              onClick={handleSubmit}
            />
          </form>
        </S.Container>
        <S.Img src={img} alt="img" />
      </S.Wrap>
    </>
  );
};

export default Auth;
