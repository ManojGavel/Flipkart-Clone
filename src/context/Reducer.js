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
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Iphone 14/14plus":
      return {
        ...state,
        showProduct: [...iphone_14_iphone_14_plus],
      };
    case "Samsung s21 FE":
      return {
        ...state,
        showProduct: [...SAMSUNG_Galaxy_S21_FE_5G],
      };
    case "Tempered Galss":
      return {
        ...state,
        showProduct: [...TEMPERED_GALSS],
      };
    case "Insta camera":
      return {
        ...state,
        showProduct: [...INSTA_CAMERA],
      };
    case "Moto g73":
      return {
        ...state,
        showProduct: [...MOTOROLA_G73_5G],
      };
    case "productPage":
      return {
        ...state,
        showProduct: [action.prodyct],
      };
    case "addToCart":
      const existingCartItemIndex = state.cartItems.findIndex(
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
      }
      return {
        ...state,
        cartItems: updatedCartItems1,
      };
    case "removeAllFromCart":
      const filteredItemArr = state.cartItems.filter(
        (cartItem) => !(cartItem.id === action.id)
      );
      return {
        ...state,
        cartItems: filteredItemArr,
      };
    default:
      return state;
  }
};

export default reducer;
