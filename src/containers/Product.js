import { connect } from "react-redux";
import Product from '../components/pruduct/Product';
import { addToCart, isInCart, removeFromCart } from "../ducks/Cart";

const mapStateToProps = (state , props) =>{
    return {
        isInCart : isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch)=>({
    addToCart : (id)=> dispatch(addToCart(id)),
    removeFromCart : (id) => dispatch(removeFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);