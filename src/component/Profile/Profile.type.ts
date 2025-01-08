import { CustomCSSPropsType } from '@/type/StyledType'

export interface ProfilePropsType extends CustomCSSPropsType {
  $size: 'small' | 'large'
  $imgSrc: string
}
