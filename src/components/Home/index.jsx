import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Grid } from '../Lib';
import { ShippingIcon, OrganicIcon, CreditCardIcon } from '../../Icons';
import {
  Hero,
  ArrowIconStyled,
  HeroText,
  HeroButton,
  SellingPropositions,
  SellingElementStyled,
  Products,
} from './styles';
import Product from '../Product';
import { useShoppingCart } from '../../context';

export default function Home() {
  const scroll = () => window.scrollTo(0, window.innerHeight);
  const { state, dispatch, getProductQty } = useShoppingCart();
  const onProductChange = useCallback(({ type, name }) => dispatch({ type, name }), [dispatch]);
  
  return (
    <main>
      <Hero>
        <HeroText>
          <span>Whether you are looking for adding that zing in your recipe<br />or want to reach a new level of heat pleasure</span>
          <h1>We have what's right for you!</h1>
          <HeroButton>Check out our products</HeroButton>
        </HeroText>
        <ArrowIconStyled onClick={scroll} />
      </Hero>
      <SellingPropositions>
        <SellingElement Icon={ShippingIcon} title="Free Shipping" text="On orders over 20€" />
        <SellingElement Icon={OrganicIcon} title="Organic and Sustainable" text="Because we care about the planet" />
        <SellingElement Icon={CreditCardIcon} title="Secure Payments" text="Transparent and Digital" />
      </SellingPropositions>
      <Products>
        <h1>MOST POPULAR PRODUCTS</h1>
        <Grid columns="1fr 1fr 1fr 1fr" width="100%">
          { state.products.filter(p => p.homepage).map(p => <Product key={p.name} {...p} value={getProductQty(p.name)} variant="detailed" onChange={onProductChange} />)}
        </Grid>
        <Link to="">See all products</Link>
      </Products>
    </main>
  );
}

const SellingElement = ({ Icon, title, text }) => (
  <SellingElementStyled>
    <Icon />
    <h2>{title}</h2>
    <span>{text}</span>
  </SellingElementStyled>
);