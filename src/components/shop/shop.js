import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

import ShopProduct from "./shop-product";
import ShopSearchBar from "./shop-search-bar";
import ShopCart from "./shop-cart";
import CartButtonAdd from "./cart-button-add";


class Shop extends Component {
    constructor() {
        super();

        this.state =  {
            showCart: true
        }
    }

    componentDidMount() {
        const headerLinks = [
            {   
                _id: 0,
                title: "Login",
                path: "/signin"
            }
        ]

        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();

        this.props.fetchShopProducts();
    }

    shouldComponentUpdate(nextProps) {
        if (this.props !== nextProps) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
        }

        return true
    }

    onSubmit = (fields) => {
        this.props.filterProductsWithQuery(fields);
    }

    handleAddToCart = () => {
        if (document.getElementById("shop-cart").classList.contains("cart-hidden")) {
            document.getElementById("shop-cart").classList.remove("cart-hidden");
        } else {
            document.getElementById("shop-cart").classList.add("cart-hidden");
        }
    }

    render() {
        // return <ShopCart className="shop__cart"/> 

        return (
            <div className="shop">
                <ShopSearchBar onSubmit={this.onSubmit} className="shop__search-bar" />

                <div className="shop__products">
                    {
                        this.props.filteredProducts.map(product => {
                            return (
                                <ShopProduct {...product} key={product._id} />
                            )
                        })
                    }
                </div>

                {
                    this.state.showCart ? <ShopCart className="shop__cart"/> : ""
                }

                <CartButtonAdd onClick={this.handleAddToCart} className="shop__cart-button" />
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { categories, filteredProducts } = state.shop;

    return { 
        categories, 
        filteredProducts 
    }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;