import { HTMLAttributes, MouseEvent, ReactElement, ReactNode } from 'react'

export type buttonSizeType = 'small' | 'medium' | 'large' | 'full'
export type buttonColorType = 'icon'

export interface ButtonPropsType extends HTMLAttributes<HTMLButtonElement> {
  /** 버튼 사이즈 */
  $sizeType: buttonSizeType
  /** 버튼 배경, 테두리 설정 */
  $buttonColorType: buttonColorType
  /** disabled 여부 */
  disabled?: boolean
  /** 버튼 활성화 여부 */
  $isActive: boolean
  /** 버튼 클릭 callback 함수 */
  $buttonClickCallbackF: (e: MouseEvent<HTMLButtonElement>) => void
  /** 자식 노드 */
  children?: ReactNode
}

/** 버튼 스타일 컴포넌트에서 사용하는 타입 */
export type StyledButtonType = Pick<
  ButtonPropsType,
  '$sizeType' | '$buttonColorType'
>

export type IconButtonPropsType = ButtonPropsType & { $icon: ReactElement }
