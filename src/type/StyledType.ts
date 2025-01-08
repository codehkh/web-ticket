import { Interpolation } from 'styled-components'

export interface CustomCSSPropsType {
  /** 커스텀할 css 전달 */
  $customCSS?: Interpolation<object> | undefined
}
