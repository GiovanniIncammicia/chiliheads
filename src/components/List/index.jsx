import React, { useCallback, useMemo, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { ListboxOption } from '@reach/listbox';

import { Flex, HeatLevel, Grid } from '../Lib';
import Product from '../Product';
import { useShoppingCart } from '../../context';
import { TimesIcon } from '../../Icons';
import { SmallHero, HeroText, Options, Path, FilterTitle, FilterSelect, Reset } from './styles';
import { filtersReducer, initialFilters } from './reducer';

const heatLevelStyle = { white: true, style: { marginLeft: '30rem' } };

export default function List ({ hero, list, filterFunction, title, text }) {
  const { dispatch, getProductQty } = useShoppingCart();
  const [filters, dispatchFilters] = useReducer(filtersReducer, initialFilters);
  const onProductChange = useCallback(({ type, name }) => dispatch({ type, name }), [dispatch]);
  const onFilterChange = useCallback((value, type) => dispatchFilters({ type, value}), [dispatchFilters]);
  const onReset = () => dispatchFilters({ type: 'reset' });
  const onHeatChange = value => onFilterChange(value, 'heatLevel');
  const onFlavourChange = value => onFilterChange(value, 'flavour');
  const customFilterFunction = useCallback(({ heat, flavours }) => (
    (filters.heatLevel === 'default' || String(heat) === filters.heatLevel)
    && (filters.flavour === 'default' || flavours?.includes(filters.flavour))
  ), [filters]);

  const l = useMemo(() => list.filter(filterFunction).filter(customFilterFunction), [filterFunction, list, customFilterFunction]);
  const flavours = useMemo(() => [...new Set(list.filter(filterFunction).reduce((acc, { flavours }) => ([...acc, ...flavours]), []))], [filterFunction, list]);

  return (
    <main>
      <SmallHero img={hero}>
        <HeroText>
          <h1>{title}</h1>
          <span>{text}</span>
        </HeroText>
      </SmallHero>
      <Options>
        <Path><Link to="/">Home</Link> > {title}</Path>
        <Flex justifyContent="flex-start">
          <FilterTitle>Filtri</FilterTitle>
          <FilterSelect value={filters.heatLevel} onChange={onHeatChange}>
            <ListboxOption value="default">Set Heat Level</ListboxOption>
            {[1,2,3,4,5].map(n => <ListboxOption key={`heatFilter${n}`} value={`${n}`}>{n}<HeatLevel heat={n} name={`heatFilter${n}`} {...heatLevelStyle} /></ListboxOption>)}
          </FilterSelect>
          <FilterSelect value={filters.flavour} onChange={onFlavourChange}>
            <ListboxOption value="default">Set Flavour</ListboxOption>
            { flavours.map(f => <ListboxOption value={f} key={`flavourFilter${f}`}>{`${f[0].toUpperCase()}${f.slice(1)}`}</ListboxOption>) }
          </FilterSelect>
          <Reset onClick={onReset}>Reset <TimesIcon /></Reset>
        </Flex>
      </Options>
      <Grid columns="1fr 1fr 1fr 1fr" rowGap="30rem" padding="20rem var(--lateral-padding)">
        { l.map(p => <Product key={p.name} {...p} value={getProductQty(p.name)} onChange={onProductChange} variant="small" />) }
      </Grid>
    </main>
  );
}