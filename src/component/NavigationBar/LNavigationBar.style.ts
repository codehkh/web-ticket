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

export const AnalysisDiv = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-areas:
    'icon title'
    '. subtitle'
    '. text';
  grid-template-rows: 30px repeat(2, fit-content(100%));
  grid-template-columns: fit-content(100%) 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 8px;

  padding-right: 30px;

  visibility: ${(props) => !props.$isOpen && 'hidden'};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};

  transition:
    visibility 0.2s,
    opacity 0.2s;
`
export const Icon = styled.div`
  grid-area: icon;

  padding: 2px;
  justify-self: center;
`

export const Title = styled.span`
  grid-area: title;

  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.17px;
  text-align: left;
`
export const SubTitle = styled.span`
  grid-area: subtitle;

  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.27px;
  text-align: left;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Text = styled.div`
  grid-area: text;

  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto; /* 좌측 라벨과 우측 숫자+단위 */
  align-items: center; /* 세로 정렬 */

  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.27px;
  text-align: left;
  color: var(--gray-200);
`

export const Count = styled.span`
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 500;
  line-height: 20.27px;
  color: var(--black-100);
  &::after {
    content: '장'; /* 단위 추가 */
    font-family: Noto Sans KR;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.27px;
    margin-left: 4px; /* 숫자와 단위 간격 */
    color: var(--gray-200);
  }
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
