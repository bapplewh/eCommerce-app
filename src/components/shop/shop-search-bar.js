import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function FormSearchBar(props) {
    return (
        <div className="seach-bar-grid">
            <FontAwesomeIcon className="seach-bar-grid__icon" icon={faSearch} />
            <input className={`${props.className} form-search-bar seach-bar-grid__input`} {...props.input} type="text" placeholder="Search" />
        </div>
    )
}

class ShopSearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field name="query" className="shop-search-bar__form-search-bar" placeholder="Search" component={FormSearchBar} />
            </form>
        )
    }
}


ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;