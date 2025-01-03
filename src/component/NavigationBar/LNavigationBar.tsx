import React, { useState } from 'react'
import IconButton from '@/component/Button/IconButton'

import * as Style from '@/component/NavigationBar/LNavigationBar.style'

import Rarrow from '@/assets/Rarrow.svg'

const LNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Style.Container $isOepn={isOpen}>
      <IconButton
        $sizeType={'small'}
        $buttonColorType={'icon'}
        $isActive={false}
        $buttonClickCallbackF={() => setIsOpen(!isOpen)}
        $icon={<Rarrow />}
      />
    </Style.Container>
  )
}

export default LNavigationBar
