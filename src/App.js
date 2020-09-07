import React, { useReducer, useMemo, useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';

import { reducer, initialState, init, Provider } from './context';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import List from './components/List';

import products from './products';
import freshHero from './images/fresh_bg.jpg';
// import dryHero from './images/dry_bg.jpg';
// import saucesHero from './images/sauces_bg.jpg';
// import spicesHero from './images/spices_bg.jpg';

const routesOptions = {
  fresh: {
    title: "Fresh Chillies",
    text: `Fresh chillies are used all around the world for their mouthwatering heat and their
authentic taste. Try adding them to marinades, freezing them to grate on your pasta
dish later or even use them to make sauces!`,
    hero: freshHero,
    filterFunction: p => true,
  },
  dry: {
    title: "Dry Chillies",
    text: ``,
    hero: freshHero,
    filterFunction: p => p.type === 'dry',
  },
  sauces: {
    title: "Hot Sauces",
    text: ``,
    hero: freshHero,
    filterFunction: p => p.type === 'sauce',
  },
  spices: {
    title: "Flaming Spices",
    text: ``,
    hero: freshHero,
    filterFunction: p => p.type === 'spice',
  },
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const firstTime = useRef(true);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  useEffect(() => {
    if (firstTime.current) firstTime.current = false;
    else window.localStorage.setItem(
      'products',
      JSON.stringify(state.products.filter(p => p.qty).map(({ name, qty }) => ({ name, qty })))
    );
  }, [state]);

  return (
    <Provider value={contextValue}>
      <Header />
      <Switch>
        <Route path="/blog">blog</Route>
        <Route path="/fresh">
          <List list={products} {...routesOptions.fresh}/>
        </Route>
        <Route path="/dry">
          <List list={products} {...routesOptions.dry}/>
        </Route>
        <Route path="/sauces">
          <List list={products} {...routesOptions.sauces}/>
        </Route>
        <Route path="/spices">
          <List list={products} {...routesOptions.spices}/>
        </Route>
        <Route path="/"><Home /></Route>
      </Switch>
      <Footer />
    </Provider>
  );
};