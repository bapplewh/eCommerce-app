import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CartButton({className, icon, onClick}) {
    return (
        <a onClick={onClick} className={`${className} cart-button`}>
            <FontAwesomeIcon icon={faTimes} className={icon} /> 
        </a>
    )
}

export default CartButton;