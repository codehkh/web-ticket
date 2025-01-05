import { FC, MouseEvent } from 'react'

import * as Style from '@/component/Button/Button.style'
import { IconButtonPropsType } from './Button.type'

export const IconButton: FC<IconButtonPropsType> = (props) => {
  const { $icon, $onClickF, $isActive } = props

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    $onClickF(e)
  }

  return (
    <Style.IconButton
      {...props}
      className={$isActive ? 'active' : ''}
      onClick={handleButtonClick}
    >
      {$icon}
    </Style.IconButton>
  )
}

export default IconButton
