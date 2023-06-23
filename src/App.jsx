import './App.css';
import Inputs from './components/Inputs/inputs';
import List from './components/List/List';
import Totaux from './components/Totaux/Totaux';

function App() {
  return (
    <>
      <h1>Mes dépenses</h1>
      <Inputs />
      <List />
      <Totaux />
    </>
  );
}

export default App;
