import { getProduct } from "./Products";

const CART_ADD = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE'

//reducer
const initialState= {
    item :[],
    currency :'EUR'
}
export default function cart (state =initialState , action ={}){
    switch (action.type){
        case CART_ADD :
            return handleCartAdd(state, action.payload)
        case CART_REMOVE :
            return handleCartRemove (state, action.payload)
            default : return state  
    }
}

function handleCartAdd (state, payload){
    return {
        ...state, items:[...state.items ,payload.productId]
    }
}

function handleCartRemove (state, payload){
    return {
        ...state,
        item :state.item.filter(id => id !== payload.productId)
    }
}
//action creator
 export  function addToCart(productId){
     return {
         type: CART_ADD,
         payload :
             productId
     }
 }
 export  function removeFromCart(productId){
    return {
        type: CART_REMOVE,
        payload :
            productId
    }
}
//selectors
export  function isInCart(state, props){
    return state.cart.items.indexOf(props.id) !== -1;
}
export  function getItem(state, props){
    return state.cart.items.map((id) => getProduct(state, {id}))
}
export  function getCurrency(state, props){
    return state.cart.currency
}
export  function getTotal(state, props){
    state.cart.items.reduce((acc, id)=>{
        const item =getProduct (state, {id});
        return acc + item.price
        
    },0)
}