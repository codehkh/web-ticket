'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {        
        font-family: 'Pretendard';
        margin: 0;
        padding: 0;
        box-sizing: border-box;


        &::-webkit-scrollbar { 
            width: 8px;
            height: 8px;

        }

        &::-webkit-scrollbar-thumb{
            background: #f1f1f3;
            border-radius: 10px;
        }

       
    }
    html {
        /** 폰트 설정 */
    }
    body {
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        width: 100%;
    }

    .App {
        width: 100vw;
        height: 100vh;
        display: grid;
    }
`

export default GlobalStyle
