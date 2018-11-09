import React, { Component } from 'react';
import { updateUser } from './../../redux/user';
import { connect } from 'react-redux';
import axios from 'axios';

class Private extends Component {

    async componentDidMount() {
        let res = await axios.get('/api/user-data');
        console.log(res);
        this.props.updateUser(res.data)
    }

    render() {
        let { user } = this.props;
        return (
            <div>
                <h1>Account Information</h1>
                <hr /><hr /><hr />
                {
                    user.email ? (
                        <div>
                            <p>Account Holder: Daniel Johnson</p>
                            <p>Account Number: 918273645</p>
                            <p>Account Email: {user.email}</p>
                            <p>Balance: {Math.floor((Math.random() + 1) * 100)}</p>
                        </div>
                    ) : <p>Please Log In</p>
                }
                <a href="http://localhost:4000/auth/logout">
                    <button>Logout</button>
                </a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('redux store state: ', state)
    return state
}


export default connect(mapStateToProps, { updateUser })(Private);