import styled, { css } from 'styled-components'

export const Container = styled.div<{ $isOepn: boolean }>`
  width: ${(prosp) => (prosp.$isOepn ? `30%` : `10%`)};
  height: 100%;

  padding: 10px;
  background-color: var(--gray-100);
`
