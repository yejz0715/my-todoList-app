import SignIn from "./pages/Auth/SignIn";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <SignIn />
    </div>
  );
}
//  2/16
//1. 라우터
//2. signin, signup (심플하게) + 이메일 그거
//3. todo 나오게

//  2/17
//4. api+store+reducer 틀만 만들기
export default App;
