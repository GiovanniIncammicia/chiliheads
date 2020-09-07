import { createContext, useContext } from 'react';
import products from './products';

export const initialState = { products, shoppingCartIsOpen: false };

export const init = ({ products, ...rest}) => {
  const storage = JSON.parse(window.localStorage.getItem('products'));
  if (!storage || storage.length === 0) return { products, ...rest };
  return {
    products: products.map(p => {
      const storageProduct = storage.find(s => s.name === p.name);
      return storageProduct ? { ...p, qty: storageProduct.qty } : p;
    }),
    ...rest
  }
};

const ShoppingCartContext = createContext({});
export const Provider = ShoppingCartContext.Provider;

const productReducer = (products, action) => {
  switch (action.type) {
    case 'increment':
      return products.map(p => p.name === action.name
        ? { ...p, qty: p.qty ? p.qty + 1 : 1 }
        : p
      );
    case 'decrement':
      return products.map(p => p.name === action.name
        ? { ...p, qty: p.qty > 0 ? p.qty - 1 : 0 }
        : p
      );
    default: throw new Error();
  }
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'increment': 
    case 'decrement':
      return { ...state, products: productReducer(state.products, action) };
    case 'toggleShoppingCart':
      return { ...state, shoppingCartIsOpen: !state.shoppingCartIsOpen };
    default: throw new Error();
  }
}

export const useShoppingCart = () => {
  const { state, dispatch } = useContext(ShoppingCartContext);
  const getProductQty = name => state.products.find(p => p.name === name)?.qty || 0;
  return { state, dispatch, getProductQty };
}