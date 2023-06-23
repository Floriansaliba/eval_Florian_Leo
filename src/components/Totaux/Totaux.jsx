import './Totaux.css';
import React, { useContext, useEffect } from 'react';
import { ListContext } from '../../utils';

function Totaux() {
  const [state, dispatch] = useContext(ListContext);

  console.log(state.items);

  //   const displayTotal = () => {
  //     let count = 0;
  //     items.forEach((element) => {
  //       count += parseInt(element.amount);
  //     });
  //     return count;
  //   };

  return (
    <>
      <h2>Sous-totaux</h2>

      <div className='subTotals'>
        <div className='alimentation'>
          <h3>Alimentation</h3>
          <p>{parseInt(state.subtotals.alimentation) + ' €'}</p>
        </div>

        <div className='logement'>
          <h3>Logement</h3>
          <p>{parseInt(state.subtotals.logement) + ' €'}</p>
        </div>

        <div className='transport'>
          <h3>Transport</h3>
          <p>{parseInt(state.subtotals.transport) + ' €'}</p>
        </div>

        <div className='divertissement'>
          <h3>Divertissement</h3>
          <p>{parseInt(state.subtotals.divertissement) + ' €'}</p>
        </div>

        <div className='santé'>
          <h3>Santé</h3>
          <p>{parseInt(state.subtotals.sante) + ' €'}</p>
        </div>

        <div className='éducation'>
          <h3>Éducation</h3>
          <p>{parseInt(state.subtotals.education) + ' €'}</p>
        </div>

        <div className='autres'>
          <h3>Autres</h3>
          <p>{parseInt(state.subtotals.autres) + ' €'}</p>
        </div>
      </div>

      <h2>Total</h2>

      <div style={{ fontWeight: 'bold', fontSize: '40px' }}>
        {parseInt(state.total) + ' €'}
      </div>
    </>
  );
}

export default Totaux;
