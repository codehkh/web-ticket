import { MouseEvent } from 'react'

import * as Style from '@/component/Button/Button.style'
import { IconButtonPropsType } from '@/component/Button/Button.type'

const IconButton = (props: IconButtonPropsType) => {
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
