import styled, { css } from 'styled-components'

export const Container = styled.div<{ $isOepn: boolean }>`
  width: ${(prosp) => (prosp.$isOepn ? `240px` : `80px`)};
  height: 100%;
  transition: width 0.5s ease;

  display: grid;
  grid-template-areas:
    'profile'
    'follow'
    'btn';
  grid-template-rows: 100px 1fr fit-content(100%);

  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: var(--gray-100);
`
export const Button = styled.div<{ $isOepn: boolean }>`
  grid-area: btn;

  transform: ${(prosp) => (prosp.$isOepn ? `rotate(180deg)` : `rotate(0deg)`)};
  transition: transform 0.5s;
`
