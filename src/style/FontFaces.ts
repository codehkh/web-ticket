import { css } from 'styled-components'

export const defaultFontFaces = css`
  /* 폰트 이름과 폰트 굵기 맵핑 */
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-weight#common_weight_name_mapping */

  /* noto-sans-kr-100 - korean_latin */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 100;
    src:
      url('/fonts/noto-sans-kr-v36-korean_latin-100.woff2') format('woff2'),
      /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        url('/fonts/noto-sans-kr-v36-korean_latin-100.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
  }
  /* noto-sans-kr-200 - korean_latin */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 200;
    src:
      url('/fonts/noto-sans-kr-v36-korean_latin-200.woff2') format('woff2'),
      /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        url('/fonts/noto-sans-kr-v36-korean_latin-200.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
  }
  /* noto-sans-kr-300 - korean_latin */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    src:
      url('/fonts/noto-sans-kr-v36-korean_latin-300.woff2') format('woff2'),
      /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        url('/fonts/noto-sans-kr-v36-korean_latin-300.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
  }
  /* noto-sans-kr-regular - korean_latin */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;

    src:
      url('../fonts/noto-sans-kr-v36-korean_latin-regular.woff2')
        format('woff2'),
      /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        url('../fonts/noto-sans-kr-v36-korean_latin-regular.woff')
        format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
  }
  /* noto-sans-kr-500 - korean_latin */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src:
      url('/fonts/noto-sans-kr-v36-korean_latin-500.woff2') format('woff2'),
      /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        url('/fonts/noto-sans-kr-v36-korean_latin-500.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
  }
  /* noto-sans-kr-600 - korean_latin */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 600;

    src:
      url('/fonts/noto-sans-kr-v36-korean_latin-600.woff2') format('woff2'),
      /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        url('/fonts/noto-sans-kr-v36-korean_latin-600.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
  }
  /* noto-sans-kr-700 - korean_latin */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src:
      url('/fonts/noto-sans-kr-v36-korean_latin-700.woff2') format('woff2'),
      /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        url('/fonts/noto-sans-kr-v36-korean_latin-700.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
  }
  /* noto-sans-kr-800 - korean_latin */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 800;
    src:
      url('/fonts/noto-sans-kr-v36-korean_latin-800.woff2') format('woff2'),
      /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        url('/fonts/noto-sans-kr-v36-korean_latin-800.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
  }
  /* noto-sans-kr-900 - korean_latin */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    src:
      url('/fonts/noto-sans-kr-v36-korean_latin-900.woff2') format('woff2'),
      /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        url('/fonts/noto-sans-kr-v36-korean_latin-900.woff') format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
  }
`
