import { Header } from 'components/Header';
import {useState} from 'react';

function App() {

  const [money, setMoney] = useState(100000000);

  return (
    <div className="App">
        <Header money={money}/>
    </div>
  );
}

export default App;
