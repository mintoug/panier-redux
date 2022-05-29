import { connect } from "react-redux";
import ProductList from'../components/productList/ProductList';
import { getProducts } from "../ducks/Products";

const mapStateToProps = (state , props)=>{
    return{
           products:  getProducts(state, props),
};
};
export default connect(mapStateToProps)(ProductList);