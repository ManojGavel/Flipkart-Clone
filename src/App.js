import { useState } from "react";
import "./App.css";
import Modal from "./conponents/Modal/Modal";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./conponents/RootLayout/RootLayout";
import Home from "./conponents/Home/Home";
import ShowProduct from "./conponents/ShowProduct/ShowProduct";
import ProductPage from "./conponents/ProductPage/ProductPage";
import Cart from "./conponents/Cart/Cart";
import Checkout from "./conponents/Checkout/Checkout";


function App() {
  // const  [{},dispatch]= useStateValue()
  const [modalVisible, setModalIsVisible] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout setModalIsVisible={setModalIsVisible} />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/productShow",
          element: <ShowProduct />,
        },
        {
          path:"/productPage",
          element:<ProductPage/>
        },
        {
          path: "/cart",
          element:<Cart/>
        },
        {
          path: "/checkout",
          element:<Checkout/>
        }
      ],
    },
  ]);
  return (
    <div className="App">
      {modalVisible && <Modal setModalIsVisible={setModalIsVisible} />}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
