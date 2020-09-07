import React, { memo } from 'react';
import styled from 'styled-components';
import { Flex, HeatLevel } from './Lib';
import { PlusIcon, MinusIcon } from '../Icons';

const ProductStyled = styled(Flex)`
  width: 19vw;
  padding: 20rem;
  color: var(--white);
  background-color: var(--main);
  flex-direction: column;
  border-radius: 7rem;
  font-weight: 300;
  & > img {
    width: 100%;
    height: 10vw;
    border-radius: 10rem;
  }
`;

const Title = styled.h2`
  font-size: 18rem;
  font-weight: 400;
  margin: 18rem 0 6rem;
`;
const Info = styled(Flex)`
  font-size: 13rem;
  justify-content: space-between;
  width: 100%;
`;

const Price = styled.span`
  font-size: 25rem;
  font-weight: 700;
  margin: 23rem 0;
`;
const Text = styled.p`
  font-size: 16rem;
  margin-top: 23rem;
  height: 90rem;
`;
const Number = styled.span`font-size: 18rem;`;
const Button = styled(({ Icon, ...p}) => <button {...p}><Icon /></button>)`
  background-color: var(--white);
  color: var(--main);
  height: 30rem;
  border-radius: 7rem;
  padding: 0 10rem;
  svg + span{ margin-left: 10rem; }
`;

const Product = memo(({ img, title, text, name, value, onChange, heat, price, variant = 'regular' }) => {
  const handlePlus = () => onChange({ type: 'increment', name });
  const handleMinus = () => onChange({ type: 'decrement', name });
  return (
    <ProductStyled>
      <img src={img} alt={title} />
      <Title>{title}</Title>
      <Info>
        <span>1 pack: 100g</span>
        <HeatLevel { ...{ heat, name } } />
      </Info>
      {variant === 'detailed' && <Text>{text}</Text>}
      <Price>{price}€</Price>
      <Flex justifyContent="space-between" width="100%">
        <Button Icon={MinusIcon} onClick={handleMinus} />
        <Number>{value}</Number>
        <Button Icon={PlusIcon} onClick={handlePlus}/>
      </Flex>
    </ProductStyled>
  );
});

export default Product;