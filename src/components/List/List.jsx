import { useContext } from 'react';
import { ListContext } from '../../utils';
import Item from '../Item/Item';

function List() {
  const [state] = useContext(ListContext);

  return (
    <div>
      <ul>
        {state.items.map((item, key) => (
          <Item key={key} value={item} />
        ))}
      </ul>
    </div>
  );
}

export default List;
