
import './App.css';
import Header from './conponents/Header/Header';
import Menu from './conponents/Menu/Menu';
import Products from './conponents/Products/Products';
import CarouselImg from './conponents/carouselImg/CarouselImg';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <CarouselImg/>
      <Products/>
    </div>
  );
}

export default App;
