import { useContext } from 'react';
import { ListContext } from '../../utils';

function Item({ value }) {
  const [state, dispatch] = useContext(ListContext);

  const handleColor = () => {
    switch (value.category) {
      case 'Alimentation':
        return 'red';
      case 'Logement':
        return 'blue';
      case 'Transport':
        return 'yellow';
      case 'Divertissement':
        return 'green';
      case 'Santé':
        return 'purple';
      case 'Autres':
        return 'brown';
      case 'Éducation':
        return 'pink';
      default:
        return 'blue';
    }
  };

  return (
    <li
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <p>{value.title}</p>
      <p>{parseInt(value.amount) + ' €'}</p>
      <p
        style={{
          background: handleColor(),
          padding: '2px',
          borderRadius: '5px',
        }}
      >
        {value.category}
      </p>
      <button onClick={() => dispatch({ type: 'RemoveItem', payload: value })}>
        X
      </button>
    </li>
  );
}

export default Item;
