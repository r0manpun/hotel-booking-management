import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
    
     /* Base transition for all color changes */
  --transition-duration: 0.5s;

 &, &.light-mode{ 
  /*FOR LIGHT MODE*/
--color-slate-0: #fff;
--color-slate-50: #F9F9FA;
--color-slate-100: #F0F0F3;
--color-slate-200: #DCDEE5;
--color-slate-300: #BFC3CD;
--color-slate-400: #8D94A5;
--color-slate-500: #646D7E;
--color-slate-600: #4D5566;
--color-slate-700: #3C4353;
--color-slate-800: #272E3F;
--color-slate-900: #18202F;

  --color-sky-100: #e0f2fe;
  --color-sky-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

--backdrop-color:rgba(255, 255, 255, 0.1);

  --image-grayscale: 0;
  --image-opacity: 100%;
}


 &.dark-mode {
      /* FOR DARK MODE */
      --color-slate-0:rgb(16, 23, 36);
      --color-slate-50: #18202F;
      --color-slate-100: #272E3F;
      --color-slate-200: #3C4353;
      --color-slate-300: #4D5566;
      --color-slate-400: #646D7E;
      --color-slate-500: #8D94A5;
      --color-slate-600: #BFC3CD;
      --color-slate-700: #DCDEE5;
      --color-slate-800: #F0F0F3;
      --color-slate-900: #F9F9FA;

      
      --color-sky-100: #0759a3;
      --color-sky-500: #184970;
      --color-sky-700:#e0f2fe; 
      --color-green-100: #2D7F23;
      --color-green-700:#dcfce7;
      --color-yellow-100: #854d0e;
      --color-yellow-700: #Fef9c3;
      --color-silver-100: #374151;
      --color-silver-700: #f3f4f6;

--image-grayscale: 10%;
--image-opacity: 90%;
    }

      --color-red-700: #991b1b;
      --color-red-500: #b91c1c;
      --color-red-100: #fee2e2;

--color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;

    /* Border-radius */
    --border-radius-tiny:3px;
    --border-radius-sm:5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    /*Shadow */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);


  --image-grayscale: 0.1;
 --image-opacity: 0.9;
}


*,*::before,
*::after{
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  transition: background-color var(--transition-duration), border var(--transition-duration);
}

html {
  font-size: 62.5%;
}

body{  
  font-family: "Poppins", sans-serif;
  color: var(--color-slate-700);

    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;

    overscroll-behavior: none;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-slate-200);
  color: var(--color-slate-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a{
    color: inherit;
    text-decoration: none;
}

ul{
    list-style: none;
}

p,h1,h2,h3,h4,h5,h6{
  overflow-wrap:break-word ;
  hyphens: auto;
}

img{
    max-width: 100%;
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
    transition: filter var(--transition-duration);
}

`;

export default GlobalStyles;
