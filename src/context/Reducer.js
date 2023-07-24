import {
  iphone_14_iphone_14_plus,
  SAMSUNG_Galaxy_S21_FE_5G,
  TEMPERED_GALSS,
  INSTA_CAMERA,
  MOTOROLA_G73_5G,
} from "./ProductShow";

export const initialState = {
  showProduct: [],
  cartItems: [],
  user:null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Iphone14_14plus":
      localStorage.setItem("productShow", JSON.stringify([...iphone_14_iphone_14_plus]));
      return {
        ...state,
        showProduct: [...iphone_14_iphone_14_plus],
      };
    case "Samsung s21 FE":
      localStorage.setItem("productShow", JSON.stringify([...SAMSUNG_Galaxy_S21_FE_5G]));
      return {
        ...state,
        showProduct: [...SAMSUNG_Galaxy_S21_FE_5G],
      };
    case "Tempered Galss":
      localStorage.setItem("productShow", JSON.stringify([...TEMPERED_GALSS]));
      return {
        ...state,
        showProduct: [...TEMPERED_GALSS],
      };
    case "Insta camera":
      localStorage.setItem("productShow", JSON.stringify([...INSTA_CAMERA]));
      return {
        ...state,
        showProduct: [...INSTA_CAMERA],
      };
    case "Moto g73":
      localStorage.setItem("productShow", JSON.stringify([...MOTOROLA_G73_5G]));
      return {
        ...state,
        showProduct: [...MOTOROLA_G73_5G],
      };
    case "productPage":
      localStorage.setItem("productPage", JSON.stringify([action.prodyct, ...state.showProduct]));
      return {
        ...state,
        showProduct: [action.prodyct],
      };
    case "addToCart":
      const existingCartItemIndex = state.cartItems?.findIndex(
        (cartItem) => cartItem.id === action.item.id
      );
      console.log(existingCartItemIndex);
      // console.log(state.cartItems)
      const existingCartItem = state.cartItems[existingCartItemIndex];
      console.log(existingCartItem);
      let updatedCartItems;
      if (existingCartItem) {
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
          price:
            existingCartItem.price + action.item.price / action.item.quantity,
          offer: {
            price:
              existingCartItem.offer.price +
              action.item.offer.price / action.item.quantity,
            off: existingCartItem.offer.off,
          },
        };
        updatedCartItems = [...state.cartItems];
        updatedCartItems[existingCartItemIndex] = updatedCartItem;
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        console.log(updatedCartItem);
      } else {
        updatedCartItems = state.cartItems.concat(action.item);
      }
      // const updateTotalAmount = state.cartItems.price(action.item)
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    case "removeFromCart":
      const existingCartItemIndex1 = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      const existingCartItem1 = state.cartItems[existingCartItemIndex1];
      let updatedCartItems1;
      if (existingCartItem1.quantity === 1) {
        updatedCartItems1 = state.cartItems.filter(
          (item) => item.id !== action.id
        );
      } else {
        const updatedCartItem1 = {
          ...existingCartItem1,
          quantity: existingCartItem1.quantity - 1,
          price:
            existingCartItem1.price -
            existingCartItem1.price / existingCartItem1.quantity,
          offer: {
            price:
              existingCartItem1.offer.price -
              existingCartItem1.offer.price / existingCartItem1.quantity,
            off: existingCartItem1.offer.off,
          },
        };
        updatedCartItems1 = [...state.cartItems];
        updatedCartItems1[existingCartItemIndex1] = updatedCartItem1;
        localStorage.setItem("cart", JSON.stringify(updatedCartItems1));
      }
      return {
        ...state,
        cartItems: updatedCartItems1,
      };
    case "removeAllFromCart":
      const filteredItemArr = state.cartItems.filter(
        (cartItem) => !(cartItem.id === action.id)
      );
      localStorage.setItem("cart", JSON.stringify(filteredItemArr));
      return {
        ...state,
        cartItems: filteredItemArr,
      };
      case "SET_USER":
        return{
          ...state,
          user:action.user
        }
      case "cart":
        return{
          ...state,
          cartItems:action.cartItems
        }
      case "productShow":
        console.log(action.productShow)
        return{
          ...state,
          showProduct: [...action.productShow],
        }
      case "productPageFromLocalStorage":
        return{
          ...state,
          showProduct:[...action.product]
        }
    default:
      return state;
  }
};

export default reducer;
