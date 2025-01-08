import styled, { css } from 'styled-components'

export const Container = styled.div<{ $isOpen: boolean }>`
  width: ${(prosp) => (prosp.$isOpen ? `240px` : `86px`)};
  height: 100%;
  transition: width 0.5s ease;

  display: grid;
  grid-template-areas:
    'profile'
    'follow'
    'btn';
  grid-template-rows: 100px 1fr fit-content(100%);
  grid-template-columns: 1fr;

  align-items: center;
  justify-content: center;
  padding: 41px 16px;
  background-color: var(--gray-100);
`

export const ProfileDiv = styled.div`
  grid-area: profile;

  width: 100%;
  height: 54px;
  display: grid;

  grid-template-areas:
    'img name'
    'img id';
  grid-template-rows: repeat(2, fit-content(100%));
  grid-template-columns: fit-content(100%) 1fr;
  grid-column-gap: 11px;
  grid-row-gap: 2px;

  justify-self: left;
`

export const KorName = styled.span<{ $isOpen: boolean }>`
  grid-area: name;

  width: 100%;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 28.96px;
  text-align: left;

  visibility: ${(props) => !props.$isOpen && 'hidden'};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};

  transition:
    visibility 0.2s,
    opacity 0.2s;
`

export const Id = styled.span<{ $isOpen: boolean }>`
  grid-area: id;

  width: 100%;

  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.27px;
  text-align: left;

  color: var(--gray-200);
  visibility: ${(props) => !props.$isOpen && 'hidden'};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};

  transition:
    visibility 0.2s,
    opacity 0.2s;
`

export const Button = styled.div<{ $isOpen: boolean }>`
  grid-area: btn;

  width: fit-content;
  height: fit-content;

  justify-self: center;

  transform: ${(prosp) => (prosp.$isOpen ? `rotate(180deg)` : `rotate(0deg)`)};
  transition: transform 0.5s;
`
