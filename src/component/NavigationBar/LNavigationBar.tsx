import React, { useState } from 'react'
import IconButton from '@/component/Button/IconButton'

import * as Style from '@/component/NavigationBar/LNavigationBar.style'
import { RightIcon } from '@/assets'

const LNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Style.Container $isOepn={isOpen}>
      <Style.Button $isOepn={isOpen}>
        <IconButton
          $sizeType={'large'}
          $buttonColorType={'icon'}
          $isActive={true}
          $onClickF={() => setIsOpen(!isOpen)}
          $icon={<RightIcon />}
        />
      </Style.Button>
    </Style.Container>
  )
}

export default LNavigationBar
