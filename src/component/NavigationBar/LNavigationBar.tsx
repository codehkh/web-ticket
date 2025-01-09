import React, { useState } from 'react'

import IconButton from '@/component/Button/IconButton'
import Profile from '@/component/Profile/Profile'

import * as Style from '@/component/NavigationBar/LNavigationBar.style'

import { RightIcon, AnalysisIcon } from '@/assets'
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

      <Style.Line />

      <Style.AnalysisDiv $isOpen={isOpen}>
        <Style.Icon>
          <AnalysisIcon />
        </Style.Icon>
        <Style.Title>분석</Style.Title>
        <Style.SubTitle>예시 text</Style.SubTitle>
        <Style.Text>
          <Style.Row>
            총 티켓 <Style.Count>44</Style.Count>
          </Style.Row>
          <Style.Row>
            올해 모은 티켓 <Style.Count>44</Style.Count>
          </Style.Row>
          <Style.Row>
            이번달 모은 티켓 <Style.Count>44</Style.Count>
          </Style.Row>
        </Style.Text>
      </Style.AnalysisDiv>

      <Style.Line />

      <Style.ButtonDiv $isOpen={isOpen}>
        <IconButton
          $sizeType={'large'}
          $buttonColorType={'icon'}
          $isActive={true}
          $onClickF={() => setIsOpen(!isOpen)}
          $icon={<RightIcon />}
        />
      </Style.ButtonDiv>
    </Style.Container>
  )
}

export default LNavigationBar
