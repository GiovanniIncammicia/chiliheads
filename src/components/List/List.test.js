import { filtersReducer, initialFilters } from './reducer';

describe('List component', () => {
  test('should set heatLevel or flavour', () => {
    const newHeatLevel = filtersReducer(initialFilters, { type: 'heatLevel', value: '3' });
    const newFlavour = filtersReducer(newHeatLevel, { type: 'flavour', value: 'extreme' });
    expect(newFlavour.heatLevel).toBe('3');
    expect(newFlavour.flavour).toBe('extreme');
    const reset = filtersReducer(newFlavour, { type: 'reset' });
    expect(reset.heatLevel).toBe(initialFilters.heatLevel);
    expect(reset.flavour).toBe(initialFilters.flavour);
  });
});