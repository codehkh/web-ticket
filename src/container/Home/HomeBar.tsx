import styled from 'styled-components'

import userStore from '@/store/userStore'

import { PlusIcon } from '@/assets/icons'

export default function () {
  const { userInfo } = userStore()

  return (
    <Container>
      <NameDiv>{userInfo.name}</NameDiv>
      <PlusBtn>
        <PlusIcon />
      </PlusBtn>
    </Container>
  )
}

const Container = styled.div`
  height: 65px;
  width: 100%;

  display: grid;
  grid-template-areas: 'name btn';
  grid-template-columns: 1fr fit-content(100%);
  grid-template-rows: 1fr;

  justify-content: space-between;

  padding: 20px 16px;
`

const NameDiv = styled.div`
  grid-area: name;
  height: 100%;
  width: fit-content;

  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0%;

  color: #1c1c1e;
`

const PlusBtn = styled.button`
  grid-area: btn;

  all: unset;

  width: 22px;
  height: 22px;

  cursor: pointer;
`
