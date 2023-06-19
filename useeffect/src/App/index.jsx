import { Counter } from '../Counter';
import { ItemList } from '../ItemList';
import style from './style.module.scss';

function App() {
  return (
    <div className={style.App}>
    <ItemList/>
    <Counter/>
    </div>
  );
}

export default App;
