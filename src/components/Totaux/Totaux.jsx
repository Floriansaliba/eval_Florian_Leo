import React, { useContext, useEffect } from 'react';
import { ListContext } from '../../utils';

function Totaux() {
  const [state, dispatch] = useContext(ListContext);

  console.log(state.items);

  const items = state.items;

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
      <div>Alimentation {parseInt(state.subtotals.alimentation) + ' €'}</div>
      <div>Logement {parseInt(state.subtotals.logement) + ' €'}</div>
      <div>Transport {parseInt(state.subtotals.transport) + ' €'}</div>
      <div>
        Divertissement {parseInt(state.subtotals.divertissement) + ' €'}
      </div>
      <div>Santé{parseInt(state.subtotals.sante) + ' €'}</div>
      <div>Éducation {parseInt(state.subtotals.education) + ' €'}</div>
      <div>Autres {parseInt(state.subtotals.autres) + ' €'}</div>
      <h2>Total</h2>

      <div>{parseInt(state.total) + ' €'}</div>
    </>
  );
}

export default Totaux;
