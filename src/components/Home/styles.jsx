import styled from 'styled-components';
import { Flex } from '../Lib';
import heroImage from '../../images/hero.jpg';
import { ArrowIcon } from '../../Icons';

export const Hero = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;
  height: calc(100vh - var(--header-height));
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: var(--white);
  text-shadow: 1rem 1rem 1rem rgba(0,0,0,0.45);
`;

export const ArrowIconStyled = styled(ArrowIcon)`
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-22rem); }
    60% { transform: translateY(-15rem); }
  }
  cursor: pointer;
  font-size: 35rem;
  margin: 4% 0 2%;
  animation: 2s linear bounce infinite;
`;

export const HeroText = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 50%;
  span { font-size: 25rem; }
  h1 { font-size: 30rem; }
`;

export const HeroButton = styled.button`
  height: 85rem;
  border-radius: 25rem;
  background-color: var(--main);
  padding: 0 55rem;
  font-size: 25rem;
`;

export const SellingPropositions = styled(Flex)`
  width: 70vw;
  margin: 12vw auto;
  justify-content: space-between;
`;

export const SellingElementStyled = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  svg { font-size: 45rem; color: var(--main); margin-bottom: 18rem; }
  h2 { font-size: 23rem; }
  span { font-size: 17rem; font-weight: 300; }
`;

export const Products = styled(Flex)`
  flex-direction: column;
  font-size: 25rem;
  padding: 0 var(--lateral-padding);
  & > h1, & > div, & > a { margin-bottom: 60rem; }
  & > a { font-weight: 700; color: var(--main); }
`;