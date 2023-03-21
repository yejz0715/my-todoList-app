import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`

${reset}

html {
  --color-text: #333333;
  --color-text-secondary: #999999;
  --color-primary: #99C9A6;
  --color-background: #ECECEC;
  font-size: 62.5%; 
}
//

//header
@font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: 700;
     font-style: normal;
}
@font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: 400;
     font-style: normal;
}
@font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: 300;
     font-style: normal;
}

body{
  width:100vw;
  height: 100vh;
  /* display:flex;
  justify-content:center;
  align-items: center; */
  background-color:#f9f9f9;
  color: #333;
  margin: 0;
  font-family:'S-CoreDream-3Light', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);

}
a{
      text-decoration: none;
      color: inherit;
  }
  *{
      box-sizing: border-box;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    outline: none;
    border:none;
    background-color: transparent;
  }
  
  button {
     outline: none;
    border: none;
    cursor: pointer;
  }

  select {
    border:none;
    background: none;
     outline: none;
  }
  

`;
//input 폰트 적용
