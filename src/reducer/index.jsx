const item = {
  title: '',
  amount: 0,
  category: 'Autres',
};

export const initialState = {
  item,
  items: [],
  total: 0,
  subtotals: {
    alimentation: 0,
    transport: 0,
    divertissement: 0,
    logement: 0,
    education: 0,
    sante: 0,
    autres: 0,
  },
};

const reducer = (state, action) => {
  function CalculateTotal(items, item_category = 'all') {
    let total = 0;
    if (item_category === 'all') {
      items.forEach((element) => {
        total += parseInt(element.amount);
      });
    } else {
      items.forEach((element) => {
        if (element.category === item_category) {
          total += parseInt(element.amount);
        }
      });
    }
    return total;
  }

  switch (action.type) {
    case 'AddItem':
      const items = [...state.items];
      items.push(state.item);
      return {
        total: CalculateTotal(items),
        subtotals: {
          alimentation: CalculateTotal(items, 'Alimentation'),
          transport: CalculateTotal(items, 'Transport'),
          divertissement: CalculateTotal(items, 'Divertissement'),
          logement: CalculateTotal(items, 'Logement'),
          education: CalculateTotal(items, 'Education'),
          sante: CalculateTotal(items, 'Santé'),
          autres: CalculateTotal(items, 'Autres'),
        },
        item,
        items,
      };

    case 'RemoveItem':
      const newItems = state.items.filter((item) => item !== action.payload);

      return {
        ...state,
        total: CalculateTotal(newItems),
        subtotals: {
          alimentation: CalculateTotal(newItems, 'Alimentation'),
          transport: CalculateTotal(newItems, 'Transport'),
          divertissement: CalculateTotal(newItems, 'Divertissement'),
          logement: CalculateTotal(newItems, 'Logement'),
          education: CalculateTotal(newItems, 'Education'),
          sante: CalculateTotal(newItems, 'Santé'),
          autres: CalculateTotal(newItems, 'Autres'),
        },
        items: newItems,
      };

    case 'ChangeAmount':
      return {
        ...state,
        item: {
          ...state.item,
          amount: action.payload,
        },
      };

    case 'ChangeTitle':
      return {
        ...state,
        item: {
          ...state.item,
          title: action.payload,
        },
      };

    case 'ChangeCategory':
      return {
        ...state,
        item: {
          ...state.item,
          category: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
