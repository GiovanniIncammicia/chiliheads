import React, { memo, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from "@reach/disclosure";

import { Flex } from '../Lib';
import logo from '../../images/logo.png';
import { ShoppingCartIcon, PlusIcon, MinusIcon } from '../../Icons';
import { useShoppingCart } from '../../context';
import { useOnClickOutside } from '../../utility/hooks';
import { HeaderStyled, Logo, Menu, Icons, Products, HorizontalLine, ShoppingCartTitle, ShoppingCartStyled, ShoppingCartProductStyled, ShoppingCartButtons, PaymentButton, ShoppingCartHeaderButton } from './styles';

const Header = memo(() => {
  const { state, dispatch } = useShoppingCart();
  const toggleShoppingCart = () => dispatch({ type: 'toggleShoppingCart' });
  const wrapperRef = useRef(null);
  useOnClickOutside(wrapperRef, () => state.shoppingCartIsOpen && toggleShoppingCart());
  const filteredList = state.products.filter(p => p.qty);
  const productsCount = filteredList.reduce((acc, p) => acc + p.qty, 0);
  
  return (
    <HeaderStyled>
      <Flex>
        <Logo>
          <Link to="/">
            <img src={logo} alt="Chiliheads Logo" />
          </Link>
          <div>
            <h1>Chiliheads</h1>
            <span>Whenever you crave some serious heat.</span>
          </div>
        </Logo>
        <Link to="">Visit our blog</Link>
      </Flex>
      <Flex>
        <Menu>
          <Link to="/fresh">Fresh Chillies</Link>
          <Link to="/dry">Dry Chillies</Link>
          <Link to="/sauces">Hot Sauces</Link>
          <Link to="/spices">Flaming spices</Link>
        </Menu>
        <Icons>
          <div ref={wrapperRef}>
            <Disclosure open={state.shoppingCartIsOpen} onChange={toggleShoppingCart}>
              <ShoppingCartHeaderButton><ShoppingCartIcon /><span>{productsCount}</span></ShoppingCartHeaderButton>
              <ShoppingCart { ...{ filteredList, productsCount } } />
            </Disclosure>
          </div>
        </Icons>
      </Flex>
    </HeaderStyled>
  );
});

const ShoppingCart = ({ filteredList, productsCount }) => {
  const { dispatch } = useShoppingCart();
  const onProductChange = useCallback(action => dispatch(action), [dispatch]);
  const onClick = () => {};
  const addPadding = filteredList.length > 5;

  return (
    <ShoppingCartStyled>
      <Flex justifyContent="space-between">
        <ShoppingCartTitle>Shopping Cart</ShoppingCartTitle>
        <span>{productsCount} Product{productsCount !== 1 && 's'}</span>
      </Flex>
      <HorizontalLine />
      <Products { ...{ addPadding } }>
        { filteredList.length === 0
          ? <span>Add awesomeness to your life!</span>
          : filteredList.map(({ name, img, title, qty, price }) => <ShoppingCartProduct key={name} { ...{ name, img, title, qty, price }} onChange={onProductChange} />)
        }
      </Products>
      <HorizontalLine />
      <Flex><PaymentButton { ...{ onClick } }>Go to Checkout</PaymentButton></Flex>
    </ShoppingCartStyled>
  )
};

const ShoppingCartProduct = memo(({ name, img, title, qty, price, onChange }) => {
  const handlePlus = () => onChange({ type: 'increment', name });
  const handleMinus = () => onChange({ type: 'decrement', name });
  
  return (
    <ShoppingCartProductStyled>
      <Flex>
        <img src={img} alt={title} />
        <span>{qty}x</span>
        <h2>{title}</h2>
      </Flex>
      <Flex>
        <span>{price * qty}€</span>
        <ShoppingCartButtons>
          <Flex onClick={handleMinus}><MinusIcon /></Flex>
          <Flex onClick={handlePlus}><PlusIcon /></Flex>
        </ShoppingCartButtons>
      </Flex>
    </ShoppingCartProductStyled>
  );
});

export default Header;