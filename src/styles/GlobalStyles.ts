import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {   
  --white: #ffffff;
  
  --gray-900: #242424;
  --gray-500: #555555;
  
  --orange: #FC853C;
  --yellow: #F9C42A;
  --blue: #00D5DA;
  --pink: #AB19AE;
  --green: #0ACC66;
  
  --linear-blue:
      linear-gradient(90deg, #0081EF 0%, #009EE8 53.64%, #00D5DA 109.61%);
  --linear-pink:
      linear-gradient(270deg, #7F26C6 -16.78%, #AB19AE 41.99%, #F40386 100%);
  --linear-yellow:
      linear-gradient(90deg, #FE564A -121.49%, #FC853C -5.06%, #F9C42A 121.49%);  
}

body {
  background: var(--gray-900);
  color: var(--white);
  -webkit-font-smoothing: antialiased;
  padding: 100px;
}

body, input, textarea, button {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  font-size: 1rem; 
}
`