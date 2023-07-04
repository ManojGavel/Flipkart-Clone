import {iphone_14} from "./ProductShow"
export const initialState={
    showProduct:[]
}

export  const reducer=(state,action)=>{
    switch(action.type){
        case "iphone_14":
            return{
                ...state,
                showProduct:[...state.showProduct, ...iphone_14 ]
            }

            default:return state;
    }
}