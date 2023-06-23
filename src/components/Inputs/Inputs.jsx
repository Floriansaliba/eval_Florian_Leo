import { useContext } from 'react';
import { ListContext } from '../../utils';
import './style.css';

function Inputs() {
  const [state, dispatch] = useContext(ListContext);

  const handleChange = (event) => {
    const { value, name } = event.target;
    dispatch({ type: name, payload: value });
    console.log('ok');
  };

  return (
    <>
      <div className='inputs'>
        <input
          className='inputText'
          type='number'
          name='ChangeAmount'
          value={state.item.amount}
          placeholder='Montant de la dépense'
          onChange={handleChange}
        />
        <input
          className='inputText'
          type='text'
          name='ChangeTitle'
          value={state.item.title}
          placeholder='Titre de la dépense'
          onChange={handleChange}
        />
        <select
          className='inputText'
          name='ChangeCategory'
          id='category'
          value={state.item.category}
          onChange={handleChange}
        >
          <option value='Alimentation'>Alimentation</option>
          <option value='Logement'>Logement</option>
          <option value='Transport'>Transport</option>
          <option value='Divertissement'>Diversissement</option>
          <option value='Santé'>Santé</option>
          <option value='Education'>Éducation</option>
          <option value='Autres'>Autres</option>
        </select>
        <button
          onClick={() => {
            dispatch({ type: 'AddItem' });
          }}
          style={{ background: '#035B7B' }}
        >
          Ajouter dépense
        </button>
      </div>
    </>
  );
}

export default Inputs;
