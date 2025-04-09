import styled from 'styled-components'

import HomeBar from '@/container/Home/HomeBar'

export default function HomeContainer() {
  return (
    <Container>
      <HomeBar />
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: fit-content(100%) 1fr;

  padding: 45px 0px;
`
