import { createGlobalStyle } from 'styled-components'
import { ColorCSSVar } from '@/style/ColorCSSVar'

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
        /** color 변수 설정 */
        ${ColorCSSVar}
    }
    body {
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100%;
    }

`

export default GlobalStyle
