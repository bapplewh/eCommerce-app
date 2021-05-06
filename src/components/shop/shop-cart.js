import React, { Component } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <FontAwesomeIcon icon={faTimes} className={icon} /> 
        </div>
    )
}


function CartContent({className, products}) {
    let count = products.length;
    let productsJSX = products.map(product => <h1 key={product}>{product}</h1>)


    return (
        <div className={`${className} cart-content`}>
            <div className="cart-content__title">
                Cart ({count})
            </div>

            <div className="cart-content__products">
                {productsJSX}
            </div>

            <CartFooter className="cart-content__footer" products={products} />
        </div>
    )
}


function CartFooter({className, products}) {
    const price = 7.96;

    return (
        <div className={`${className} cart-footer`}>
            <a className="cart-footer__checkout">
                Checkout
            </a>

            <div className="cart-footer__subtotal">
                Subtotal
            </div>

            <div className="cart-footer__price">
                ${price}
            </div>
        </div>
    )
}


class ShopCart extends Component {
    render() {
        const { className } = this.props;

        return (
            <div className={`${className} shop-cart`}>
                <CartButton className="shop-cart__toggle" />
                <CartContent className="shop-cart__content" products={[234, 4524, 2343, 970, 234, 4524, 2343, 970, 234, 452]} />
            </div>
        )
    }
}

export default ShopCart;