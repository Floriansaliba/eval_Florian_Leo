import { useContext } from 'react';
import { ListContext } from '../../utils';

function Item({ value }) {
  const [state, dispatch] = useContext(ListContext);

  const handleColor = () => {
    switch (value.category) {
      case 'Alimentation':
        return 'tomato';
      case 'Logement':
        return '#429441';
      case 'Transport':
        return '#8f4517';
      case 'Divertissement':
        return '#FCB749';
      case 'Santé':
        return '#5a7bb8';
      case 'Autres':
        return '#B980FF';
      case 'Education':
        return '#d9893f';
      default:
        return 'red';
    }
  };

  return (
    <li
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: 'solid 1px',
        borderRadius: '20px',
        marginTop: '10px',
        paddingRight: '10px',
        paddingLeft: '10px',
      }}
    >
      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{value.title}</p>
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
      <button
        onClick={() => dispatch({ type: 'RemoveItem', payload: value })}
        style={{
          backgroundColor: '#e63900',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px',
          height: '40px',
        }}
      >
        X
      </button>
    </li>
  );
}

export default Item;
