import { useState } from "react";
import "./App.css";
import Modal from "./conponents/Modal/Modal";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./conponents/RootLayout/RootLayout";
import Home from "./conponents/Home/Home";
import ShowProduct from "./conponents/ShowProduct/ShowProduct";


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
