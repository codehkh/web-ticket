import styled from 'styled-components'

import LNavigationBar from '@/component/NavigationBar/LNavigationBar'

export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LayoutContainer>
      <LNavigationBar />
      <Content>{children}</Content>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: fit-content(100%) 1fr;
  grid-template-rows: 1fr;
`

const Content = styled.main`
  height: 100%;
  width: 100%;
`
