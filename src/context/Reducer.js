import { iphone_14_iphone_14_plus,SAMSUNG_Galaxy_S21_FE_5G,TEMPERED_GALSS,INSTA_CAMERA,MOTOROLA_G73_5G} from "./ProductShow";

export const initialState = {
  showProduct:[]
};

const reducer = (state, action) => {
    switch (action.type) {
            case "Iphone 14/14plus":
              return {
                
                showProduct: [...iphone_14_iphone_14_plus],
              };
            case 'Samsung s21 FE':
                return{
                  showProduct:[...SAMSUNG_Galaxy_S21_FE_5G]
                }
            case "Tempered Galss":
              return{
                showProduct:[...TEMPERED_GALSS]
              }
            case "Insta camera":
              return{
                showProduct:[...INSTA_CAMERA]
              }
            case "Moto g73":
              return{
                showProduct:[...MOTOROLA_G73_5G]
              }
            case "productPage":
              return{
                showProduct:[action.prodyct]
              }
            default:
              return state;
  }
};

export default reducer;


