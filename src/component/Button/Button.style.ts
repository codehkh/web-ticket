import styled, { css } from 'styled-components'
import { StyledButtonType } from '@/component/Button/Button.type'

const ButtonSizeVariants = {
  small: css`
    min-width: 70px;
    height: 28px;
    padding: 4px 8px;
  `,
  medium: css`
    min-width: 90px;
    height: 40px;
    padding: 10px 12.5px;
  `,
  large: css`
    min-width: 100px;
    height: 44px;
    padding: 8px 16px;
  `,
}

/** Icon Button 컴포넌트에만 적용되는 버튼 사이즈 관련 Variant */
const IconButtonSizeVariants = {
  /** button 사이즈 관련 */
  small: css`
    min-width: 28px;
    height: 28px;
    padding: 4px 8px;
  `,
  medium: css`
    min-width: 36px;
    height: 36px;
    padding: 8px;
  `,
  large: css`
    min-width: 40px;
    height: 40px;
    padding: 8px;
  `,
}

const ButtonColorTypeVariants = {
  icon: css`
    background-color: transparent;
    @media (max-width: ${(props) => props.theme.mobile}) {
    }
  `,
}

/** 모든 버튼 컴포넌트에 공통으로 들어가는 부모 버튼 컴포넌트 */
const Button = styled.button<StyledButtonType>`
  all: unset;
  box-sizing: border-box;

  text-align: center;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
  }

  ${(props) =>
    ButtonSizeVariants[props.$sizeType as keyof typeof ButtonSizeVariants]}
  ${(props) =>
    ButtonColorTypeVariants[
      props.$buttonColorType as keyof typeof ButtonColorTypeVariants
    ]}
`

/** Icon Button 스타일 컴포넌트 */
export const IconButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    IconButtonSizeVariants[
      props.$sizeType as keyof typeof IconButtonSizeVariants
    ]}
`
