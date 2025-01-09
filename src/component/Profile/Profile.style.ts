import styled, { css } from 'styled-components'
import { ProfilePropsType } from './Profile.type'

const ProfileSizeVariants = {
  small: css`
    width: 40px;
    height: 40px;
  `,
  large: css`
    width: 54px;
    height: 54px;
  `,
}

export const Container = styled.img<ProfilePropsType>`
  border-radius: 50%;

  ${(props) => ProfileSizeVariants[props.$size]}
  ${(props) => props.$customCSS}
`
