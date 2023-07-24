import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./conponents/Modal/Modal";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./conponents/RootLayout/RootLayout";
import Home from "./conponents/Home/Home";
import ShowProduct from "./conponents/ShowProduct/ShowProduct";
import ProductPage from "./conponents/ProductPage/ProductPage";
import Cart from "./conponents/Cart/Cart";
import Checkout from "./conponents/Checkout/Checkout";
import { useStateValue } from "./context/Context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./conponents/fireBase/Firebase";
import ErrorElement from "./conponents/ErrorElement/ErrorElement";


function App() {
  const[state,dispatch]=useStateValue()
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      // console.log(cart);
      dispatch({
        type: "cart",
        cartItems: cart,
      });
    }
    const productShow = JSON.parse(localStorage.getItem("productShow"));
    console.log(productShow)
    if (productShow) {
      dispatch({
        type: "productShow",
        productShow: productShow,
      });
    }
    const productPageItems = JSON.parse(localStorage.getItem("productPage"));
    if(productPageItems){
      dispatch({
        type:"productPageFromLocalStorage",
        product:productPageItems
      })
    }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user, 
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])
  // const  [{},dispatch]= useStateValue()
  const [modalVisible, setModalIsVisible] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout setModalIsVisible={setModalIsVisible} />,
      errorElement: <ErrorElement />,
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
