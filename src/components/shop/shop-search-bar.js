import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";

// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function FormSearchBar(props) {
    return (
        <input className={`${props.className} form-search-bar`} {...props.input} type="text" placeholder="Search" />
    )
}

class ShopSearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field name="shop-search-bar" className="shop-search-bar__form-search-bar" placeholder="search" component={FormSearchBar} />
            </form>
        )
    }
}


ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;