import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} sign-in-form`}>
                Sign in form
            </div>
        )
    }
}

SignInForm = reduxForm({
    form: "SignInForm"
})(SignInForm);

export default SignInForm;