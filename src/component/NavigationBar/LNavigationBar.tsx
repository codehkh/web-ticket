import React, { useState } from 'react'
import IconButton from '@/component/Button/IconButton'

import * as Style from '@/component/NavigationBar/LNavigationBar.style'

import Rarrow from '@/assets/Rarrow.svg'

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
          $icon={<Rarrow />}
        />
      </Style.Button>
    </Style.Container>
  )
}

export default LNavigationBar
