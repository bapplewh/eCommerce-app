import React, { Component } from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Quantity extends Component {
    render() {
        const { className, quantity } = this.props;

        return (
            <div className={`${className} quantity`}>
                <div className="quantity__count">
                    {quantity}
                </div>

                <div className="quantity__plus">
                    <FontAwesomeIcon className="" icon={faPlus} />
                </div>

                <div className="quantity__minus">
                    <FontAwesomeIcon className="" icon={faMinus} />
                </div>
            </div>
        )
    }
}

export default Quantity;