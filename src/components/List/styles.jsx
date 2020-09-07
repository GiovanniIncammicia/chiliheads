import styled from 'styled-components';
import { Flex } from '../Lib';
import { Listbox } from '@reach/listbox';

export const SmallHero = styled(Flex)`
  flex-direction: column;
  height: 30vh;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: var(--white);
  text-shadow: 1rem 1rem 1rem rgba(0,0,0,0.45);
`;

export const HeroText = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  h1 { font-size: 25rem; margin-bottom: 10rem;}
  span { font-size: 16rem; font-weight: 300; white-space: pre-wrap;}
`;

export const Options = styled.div`
  padding: 20rem var(--lateral-padding);
  h1 { font-size: 20rem };
`;

export const Path = styled.div`
  font-size: 13rem;
  font-weight: 300;
  margin-bottom: 15rem;
`;

export const FilterTitle = styled.h1`
  margin-right: 50rem;
`;

export const FilterSelect = styled(Listbox)`
  margin-right: 20rem;
  [data-reach-listbox-button] {
    padding: 0 13rem;
    border: 1px solid var(--border-gray);
    border-radius: 5rem;
    height: 30rem;
    font-size: 15rem;
  }
  [data-reach-listbox-arrow] {
    margin-left: 10rem;
  }
`;

export const Reset = styled.button`
  height: 30rem;
  padding: 0 15rem;
  font-size: 13rem;
  display: inline-flex;
  align-items: center;
  svg { font-size: 18rem; margin-left: 3rem; }
`;