import styled from 'styled-components';
import { Flex } from '../Lib';

export const FooterStyled = styled(Flex)`
  height: 53vh;
  background-color: var(--background-gray);
  border-top: 1rem solid var(--border-gray);
  padding: var(--lateral-padding);
  justify-content: space-between;
  & > div { height: 100%; }
`;

export const FooterColumnStyled = styled.div`
  width: 15vw;
  height: 100%;
  & > h1 { font-size: 20rem; font-weight: 700; margin-bottom: 12rem; }
  & > div { font-size: 16rem; font-weight: 300; line-height: 25rem; }
`;

export const InputLabel = styled.label`
  font-weight: 300;
  margin-bottom: 12rem;
`;

export const IconInputStyled = styled(Flex)`
  height: 40rem;
  & > div {
    height: 100%;
    background-color: var(--main);
    color: var(--white);
    width: 40rem;
    cursor: pointer;
    border-radius: 0 5rem 5rem 0;
  }
`;

export const FooterIcons = styled(Flex)`
  font-size: 30rem;
  justify-content: flex-end;
  margin-top: 20rem;
  & > svg { margin-left: 12rem; }
  & > svg:hover { color: var(--main); cursor: pointer; }
`;

export const Copyright = styled(Flex)`
  height: 10vh;
  color: var(--white);
  background-color: var(--main);
  justify-content: flex-end;
  padding: 0 var(--lateral-padding);
  font-weight: 300;
  & > a { padding-left: 25rem; }
`;