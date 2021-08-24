import {useState } from 'react';
import Header from "./Component/Layout/Header";
import AvailableMeal from './Component/Meals/AvailableMeal';
import MealsSummary from "./Component/Meals/MealsSummary";
import Modal from './Component/UI/Modal';
import CartContextProvider from './Component/store/CartProvider';


function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const closeCartHandler = () => {
    setIsOpenCart(false)
  }
  const openCartHandler = () => {
    setIsOpenCart(true)
  }
  return (
    <CartContextProvider>
      <Header onOpenCart={openCartHandler} />
      <MealsSummary />
      <AvailableMeal />
      {isOpenCart && <Modal onCloseCart={closeCartHandler}/>}
    </CartContextProvider>

  );
}

export default App;
