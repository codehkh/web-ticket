import React, { useEffect, useState } from 'react'

import IconButton from '@/component/Button/IconButton'
import Profile from '@/component/Profile/Profile'

import userStore from '@/store/userStore'

import * as Style from '@/component/NavigationBar/LNavigationBar.style'

import { RightIcon, AnalysisIcon, HumanIcon } from '@/assets/icons'
import { ANALTEXT } from '@/assets/Datas/LNaviBar.text'

const LNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { total, year, month, subtitle, userInfo, fetchUserInfo } = userStore()

  useEffect(() => {
    fetchUserInfo()
  }, [fetchUserInfo])

  return (
    <Style.Container $isOpen={isOpen}>
      <Style.ProfileDiv>
        <Profile
          $size="large"
          $imgSrc={userInfo.img ? userInfo.img : HumanIcon.src}
          $customCSS={{ gridArea: 'img' }}
        />
        <Style.KorName $isOpen={isOpen}>{userInfo.name}</Style.KorName>
        <Style.Id $isOpen={isOpen}>{userInfo.id}</Style.Id>
      </Style.ProfileDiv>

      <Style.Line />

      <Style.AnalysisDiv $isOpen={isOpen}>
        <Style.Icon>
          <AnalysisIcon />
        </Style.Icon>
        <Style.Title>{ANALTEXT.TTITLE}</Style.Title>
        <Style.SubTitle>{subtitle}</Style.SubTitle>
        <Style.Text>
          <Style.Row>
            {ANALTEXT.TOTAL}
            <Style.Count>{total}</Style.Count>
          </Style.Row>
          <Style.Row>
            {ANALTEXT.YEAR} <Style.Count>{year}</Style.Count>
          </Style.Row>
          <Style.Row>
            {ANALTEXT.MONTH} <Style.Count>{month}</Style.Count>
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
