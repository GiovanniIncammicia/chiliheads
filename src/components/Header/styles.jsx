import styled from 'styled-components';
import { Flex } from '../Lib';
import { DisclosurePanel, DisclosureButton } from '@reach/disclosure';

export const HeaderStyled = styled.header`
  height: var(--header-height);
  background-color: var(--main);
  box-shadow: var(--shadow);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  padding: 0 var(--lateral-padding);
  position: sticky;
  top: 0;
  z-index: 1;
  & > div { height: 100%; }
`;

export const Logo = styled(Flex)`
  height: 100%;
  justify-content: center;
  padding-right: var(--lateral-padding);
  margin-right: 25rem;
  border-right: 0.5rem solid white;
  & img { width: 38rem; margin-right: 17rem; }
  & > div > h1 { font-size: 22rem; line-height: 22rem; font-weight: 400; }
  & > div > span { font-size: 13rem; }
`;

export const Menu = styled.nav`
  & > a { padding: 0 10rem; }
  & > a:not(:last-child) { border-right: 1rem solid white; }
`;

export const Icons = styled.div`
  margin-left: 20rem;
  svg { font-size: 25rem; cursor: pointer; }
`;

export const ShoppingCartHeaderButton = styled(DisclosureButton)`
  position: relative;
  span {
    position: absolute;
    top: -10rem;
    left: 25rem;
    background-color: var(--white);
    color: var(--text);
    border-radius: 50%;
    display: block;
    height: 20rem;
    width: 20rem;
    line-height: 20rem;
    font-weight: 700;
    font-size: 15rem;
  }
`;

export const ShoppingCartStyled = styled(DisclosurePanel)`
  position: absolute;
  width: 500rem;
  padding: 20rem;
  background-color: var(--white);
  box-shadow: var(--shadow);
  right: 0;
  margin: 15rem 20rem 0 0;
  border-radius: 5rem;
  color: var(--text);
  ::before {
    content: '';
    position: absolute;
    top: -11rem;
    right: 26rem;
    border-bottom: solid 11rem var(--white);
    border-left: solid 9rem transparent;
    border-right: solid 9rem transparent;
  }
  :focus { outline: none; }
`;

export const ShoppingCartTitle = styled.h2`
  font-size: 18rem;
  font-weight: 400;
`;

export const HorizontalLine = styled.div`
  border-bottom: 1px solid var(--border-gray);
  margin: 15rem 0;
`;

export const Products = styled(Flex)`
  flex-direction: column;
  max-height: 300rem;
  overflow-y: auto;
  justify-content: normal;
  padding-top: 15rem;
  padding-right: ${({ addPadding }) => addPadding ? '12rem' : 0};
  & > span { margin-bottom: 15rem; }
`;

export const ShoppingCartProductStyled = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15rem;
  user-select: none;
  img { width: 60rem; border-radius: 3rem; }
  h2 { font-weight: 400; }
  span { margin: 0 12rem 0 20rem; }
`;

export const ShoppingCartButtons = styled(Flex)`
  border-radius: 50rem;
  border: 1px solid var(--border-gray);
  height: 30rem;
  width: 60rem;
  cursor: pointer;
  div { width: 50%; height: 100%; }
  div:first-child { border-right: 1px solid var(--border-gray); }
  svg { font-size: 14rem; }
`;

export const PaymentButton = styled.button`
  background-color: var(--main);
  height: 40rem;
  border-radius: 20rem;
  color: var(--white);
  padding: 0 30rem;
  margin-top: 7rem;
`;