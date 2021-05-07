import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CartButtonAdd({className, icon, onClick}) {
    return (
        <a onClick={onClick} className={`${className} cart-button`}>
            <FontAwesomeIcon icon={faCartPlus} className={icon} /> 
        </a>
    )
}

export default CartButtonAdd;