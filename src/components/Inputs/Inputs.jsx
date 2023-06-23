import { useContext, useState } from 'react';
import { ListContext } from '../../utils';
import './style.css';

function Inputs() {
  const [state, dispatch] = useContext(ListContext);

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { value, name } = event.target;
    dispatch({ type: name, payload: value });
    console.log('ok');
  };

  const handleClick = () => {
    setErrorMessage('');
    const title = state.item.title;
    const amount = state.item.amount;
    if (title === '') {
      setErrorMessage('Veuillez entrer le titre de votre dépense');
      return;
    } else if (amount === 0) {
      setErrorMessage('Veuillez entrer un montant supérieur à 0');
      return;
    } else {
      dispatch({ type: 'AddItem' });
    }
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
          onClick={handleClick}
          style={{
            background: '#035B7B',
            transition: 'background-color 0.3s, color 0.3s',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#035B7B';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#035B7B';
            e.target.style.color = 'white';
          }}
        >
          Ajouter dépense
        </button>
        <br />
        <p style={{ color: 'red' }}>{errorMessage}</p>
      </div>
    </>
  );
}

export default Inputs;
