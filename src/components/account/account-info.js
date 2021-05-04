import React, { Component } from 'react';

import PageTitle from "../page-title";
import AccountInfoForm from  "./account-info-form";


class AccountInfo extends Component {
    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="account-info">
                <PageTitle className="account-info" title="Account Information" />
                <AccountInfoForm onSubmit={this.onSubmit} className="account-info__form" />
            </div>
        )
    }
}

export default AccountInfo;