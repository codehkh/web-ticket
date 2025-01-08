import React, { useState } from 'react'

import IconButton from '@/component/Button/IconButton'
import Profile from '@/component/Profile/Profile'

import * as Style from '@/component/NavigationBar/LNavigationBar.style'

import { RightIcon } from '@/assets'
import dummyprofile from '../../../public/img/dummyprofile.png'

const LNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Style.Container $isOpen={isOpen}>
      <Style.ProfileDiv>
        <Profile
          $size="large"
          $imgSrc={dummyprofile.src}
          $customCSS={{ gridArea: 'img' }}
        />
        <Style.KorName $isOpen={isOpen}>이름</Style.KorName>
        <Style.Id $isOpen={isOpen}>id</Style.Id>
      </Style.ProfileDiv>
      <Style.Button $isOpen={isOpen}>
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
