export const initialFilters = {
  heatLevel: 'default',
  flavour: 'default'
}

export const filtersReducer = (state, action) => {
  switch (action.type) {
    case 'heatLevel':
    case 'flavour':
      return { ...state, [action.type]: action.value };
    case 'reset':
      return initialFilters;
    default: throw new Error();
  }
}