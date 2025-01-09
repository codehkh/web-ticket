import styled, { css } from 'styled-components'

export const Container = styled.div<{ $isOpen: boolean }>`
  width: ${(props) => (props.$isOpen ? `320px` : `86px`)};
  height: 100%;
  transition: width 0.5s ease;

  display: flex;
  flex-direction: column;
  gap: 16px;

  align-items: center;
  justify-content: center;
  padding: 41px 16px;
  background-color: var(--gray-100);
`

export const ProfileDiv = styled.div`
  width: 100%;
  height: 70px;
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

export const AnalysisDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-areas:
    'icon title'
    'icon subtitle'
    'icon text'
    'icon text'
    'icon text';
  grid-template-rows: repeat(5, fit-content(100%));
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

export const Line = styled.hr`
  grid-area: line;
  border: none;
  width: 100%;
  height: 0.8px;
  background-color: #e5e5ea;
`
export const ButtonDiv = styled.div<{ $isOpen: boolean }>`
  width: fit-content;
  height: fit-content;

  justify-self: center;

  transform: ${(prosp) => (prosp.$isOpen ? `rotate(180deg)` : `rotate(0deg)`)};
  transition: transform 0.5s;
`
