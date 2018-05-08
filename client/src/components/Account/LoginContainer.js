import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logUserIn } from '../../actions/authentication';

import AdminLogin from './AdminLogin';

export class LoginContainer extends Component {
    constructor(props) {
        super(props);

        // bound functions
        this.logUserInFunction = this.logUserInFunction.bind(this);
    }

    logUserInFunction(userData) {
        const { dispatch } = this.props;
        dispatch(LogUserIn(userData));
    }

    render() {
        const { authentication } = this.props;

        if (authentication.isLoggedin) {
            return (
                <Redirect to="/" />
            );
        }

        return (
            <div>
                <AdminLogin loginFunction={this.logUserInFunction} />
            </div>
        )
    }    
}

function mapStateToProps(state) {
    return {
        authentication: state.authentication,
    };
}

export default connect(mapStateToProps)(LoginContainer);