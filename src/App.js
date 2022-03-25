import { Header } from 'components/Header';
import {useState, useEffect} from 'react';
import { Product } from 'components/Product'
import products from 'components/Products.json';
import HeroSection from 'components/HeroSection';
import Footer from 'components/Footer';
import Basket from 'components/Basket';

function App() {
  const [total,setTotal] = useState(0);
  const [money, setMoney] = useState(100000000);
  const [basket,setBasket] = useState([]);

  const emptyBasket = () => {
    setBasket([]);
  }

  useEffect(() => {
    setTotal(basket.reduce((acc,item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price));
    },0))
  }, [basket]);

  return (
    <div className="App bg-bgs w-full h-full">
        <Header total={total} money={money}/>
        <HeroSection />
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-[95%] sm:w-[80%] m-auto h-auto '>
          {products.map(product => (
              <Product key={product.id} total={total} money={money} product={product} basket={basket} setBasket={setBasket} />
          ))}
        </div>
        {total > 0 && <Basket emptyBasket={emptyBasket} products={products} total={total} basket={basket} />}

        <Footer />
    </div>
  );
}

export default App;
