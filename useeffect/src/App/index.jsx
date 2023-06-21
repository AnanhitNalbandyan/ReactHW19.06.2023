import { Counter } from '../Counter';
import { ItemList } from '../ItemList';
import style from './style.module.scss';
import { Timer } from '../Timer';

function App() {
  return (
    <div className={style.App}>
      <Timer/>
    <ItemList/>
    <Counter/>
    </div>
  );
}

export default App;
