import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`

${reset}

html {
  --color-main:#5089C6;
  --color-serve-one:#719FCF;
  --color-serve-two:#92B4D9;
  --color-serve-three:#B3CAE2;
  --color-serve-four:#D4DFEC;
  --color-background: #ffffff;
  --color-text: #333333;
  --color-text-serve: #666666;
  --color-text-hint: #999999;
  --color-text-warning:#C65050

  font-size: 62.5%; 
}
@font-face {
    font-family: 'SCoreDream-Light';
    font-weight: 300; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream3.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream3.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'SCoreDream-Regular';
    font-weight: 400; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream4.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream4.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'SCoreDream-Medium';
    font-weight: 500; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream5.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream5.woff) format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'SCoreDream-Bold';
    font-weight: 600; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream6.woff2) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream6.woff) format('woff');
    font-display: swap;
}


body{
  display: flex;
  width:100vw;
  height: 100vh;
  background-color:var(--color-background);
  margin: 0;
  font-family:'SCoreDream-Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

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
    font-family:'SCoreDream-Regular';
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
