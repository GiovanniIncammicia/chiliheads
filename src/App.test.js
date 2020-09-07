// import React from 'react';
// import { render } from '@testing-library/react';
import { reducer, initialState } from './context';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Shopping Cart Context', () => {
  test('should toggle shopping cart', () => {
    const newState = reducer(initialState, { type: 'toggleShoppingCart' });
    expect(newState.shoppingCartIsOpen).toBe(true);
  });
  test(`should increment and decrement a product's qty`, () => {
    const name = 'reaper';
    const i = initialState.products.findIndex(p => p.name === name);
    const firstIncrement = reducer(initialState, { type: 'increment', name });
    expect(firstIncrement.products[i].qty).toBe(1);
    const secondIncrement = reducer(firstIncrement, { type: 'increment', name });
    expect(secondIncrement.products[i].qty).toBe(2);
    const firstDecrement = reducer(secondIncrement, { type: 'decrement', name });
    expect(firstDecrement.products[i].qty).toBe(1);
    const secondDecrement = reducer(firstDecrement, { type: 'decrement', name });
    expect(secondDecrement.products[i].qty).toBe(0);
    const thirdDecrement = reducer(secondDecrement, { type: 'decrement', name });
    expect(thirdDecrement.products[i].qty).toBe(0);
  });
});