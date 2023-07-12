import { iphone_14 } from "./ProductShow";
// export const initialState = {
//   showProduct: [""],
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "iphone_14":
//       return {
        
//         showProduct: [ ...iphone_14],
//       };

//     default:
//       return state;
//   }
// };

















export const initialState = {
  showProduct:[]
};

const reducer = (state, action) => {
    switch (action.type) {
            case "iphone_14":
              return {
                
                showProduct: [ ...iphone_14],
              };
        
            default:
              return state;
  }
};

export default reducer;


