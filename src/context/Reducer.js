import { iphone_14_iphone_14_plus,SAMSUNG_Galaxy_S21_FE_5G,TEMPERED_GALSS,INSTA_CAMERA,MOTOROLA_G73_5G} from "./ProductShow";

export const initialState = {
  showProduct:[],
  cartItems:[]
};

const reducer = (state, action) => {
    switch (action.type) {
            case "Iphone 14/14plus":
              return {
                ...state,
                showProduct: [...iphone_14_iphone_14_plus],
              };
            case 'Samsung s21 FE':
                return{
                  ...state,
                  showProduct:[...SAMSUNG_Galaxy_S21_FE_5G]
                }
            case "Tempered Galss":
              return{
                ...state,
                showProduct:[...TEMPERED_GALSS]
              }
            case "Insta camera":
              return{
                ...state,
                showProduct:[...INSTA_CAMERA]
              }
            case "Moto g73":
              return{
                ...state,
                showProduct:[...MOTOROLA_G73_5G]
              }
            case "productPage":
              return{
                ...state,
                showProduct:[action.prodyct]
              }
            case "addToCart":
              return{
                ...state,
                cartItems:[ ...state.cartItems,action.item]
              }
            default:
              return state;
  }
};

export default reducer;


