import AppRouter from "./AppRouter";
import Header from "./components/Common/Header";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <AppRouter />
    </div>
  );
}
export default App;
