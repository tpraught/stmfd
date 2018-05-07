import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../../actions/authentication';

import Register from './Register';

export class RegisterContainer extends Component {
    constructor(props) {
        super(props);

        // bound functions
        this.registerFunction = this.registerFunction.bind(this);
    }

    registerFunction(userData) {
        const { dispatch } = this.props;
        dispatch(LogUserIn(userData));
    }

    render() {
        const { isLoggedIn, registrationSucceeded } = this.props.authentication;

        // success page
        if (registrationSucceeded) {
            return (
                <Redirect to="./RegisterSuccess" />
            );
        }

        // logged out to register
        if (isLoggedIn) {
            return <RegisterPage registerFunction={this.registerFunction} />
        }
    }
}

const mapStateToProps = state => ({ authentication: state.authentication });

export default connect(mapStateToProps)(RegisterPageContainer);
