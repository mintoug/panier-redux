import React, {Component} from "react";
import PropTypes from 'prop-types';
import {removeFromCart} from '../../ducks/Cart'

class Product extends Component {
    handleClick =()=>{
        const {id, addToCart,  isInCart}=this.props;
        if (isInCart){
            removeFromCart(id);
        } else{
            addToCart(id);
        }
    };
    render () {
        const {name, price, currency, image,isInCart} = this.props;
        return <div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="product__price">
                          {price}{currency}
                    </div>
                    <div className="product__price-wrap">
                        <button className={isInCart? "btn btn-danger" : "btn btn-primary"}
                        onClick={this.handleClick}>
                            {isInCart? "supprimer":"ajouter au panier"}
                        </button>
                    </div>
                </div>
                </div>
    }
}
Product.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    price :PropTypes.number,
    currency : PropTypes.string,
    image : PropTypes.string,
    isInCart :PropTypes.bool.isRequired,
    removeFromCart : PropTypes.func.isRequired
}
export default Product;