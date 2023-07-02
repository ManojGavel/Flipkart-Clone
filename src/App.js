
import { useState } from 'react';
import './App.css';
import Header from './conponents/Header/Header';
import Menu from './conponents/Menu/Menu';
import Modal from './conponents/Modal/Modal';
import MultipleSectioins from './conponents/MultipleSections/MultipleSectioins';
import Offers from './conponents/Offers/Offers';
import Products from './conponents/Products/Products';
import Students from './conponents/StudentsSection/Students';
import CarouselImg from './conponents/carouselImg/CarouselImg';

function App() {
  const [modalVisible,setModalIsVisible]=useState(false)
  return (
    <div className="App">
     {modalVisible&& <Modal setModalIsVisible={setModalIsVisible}/>}
      <Header setModalIsVisible={setModalIsVisible}/>
      <Menu/>
      <CarouselImg/>
      <Products/>
      <Offers/>
      <Students/>
      <MultipleSectioins/>
    </div>
  );
}

export default App;
