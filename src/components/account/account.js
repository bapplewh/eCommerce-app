import React, { Component } from 'react';

import { connect } from "react-redux";
import * as actions from  "../../actions";

import AccountInfo from './account-info';
import PurchaseHistory from './purchase-history';


class Account extends Component {
    componentDidMount() {
        const navbarLinks = [
            {   
                _id: 0,
                title: "Purchase History",
                active: true,
                component: <PurchaseHistory/>
            },
            {
                _id: 1,
                title: "Account Information",
                active: false,
                component: <AccountInfo/>
            }
        ]

        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks(navbarLinks);
    }

    renderContent() {
        let jsx;

        if(this.props.navbarLinks) {
            this.props.navbarLinks.forEach(link => {
                if(link.active) {
                    jsx = link.component;
                }
            })
        }

        return jsx;
    }

    render() {
        return (
            <div className="account">
                {this.renderContent()}
            </div>
        )
    }
}


function mapsStateToProps(state) {
    const { headerLinks, navbarLinks } = state.headerNavbar;
    return { headerLinks, navbarLinks }
}

Account = connect(mapsStateToProps, actions)(Account); 

export default Account;