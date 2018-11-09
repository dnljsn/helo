import React, { Component } from 'react';
import logo from './communityBank.svg';
import axios from 'axios';
import './Login.css';

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    updateEmail(e) {
        this.setState({ email: e.target.value })
    }

    updatePassword(e) {
        this.setState({ password: e.target.value })
    }

    async login() {
        if (!this.state.email || !this.state.password) return alert('Please fill out email and password.')
        let res = await axios.post('/auth/login', {
            email: this.state.email,
            password: this.state.password
        })
        if (res.data.message === 'loggedIn') {
            this.props.history.push('/private')
        } else {
            alert(res.data.message)
        }
    }

    async signup() {
        if (!this.state.email || !this.state.password) return alert('Please fill out email and password.')
        let res = await axios.post('/auth/signup', {
            email: this.state.email,
            password: this.state.password
        })
        if (res.data.message === 'loggedIn') {
            this.props.history.push('/private')
        } else {
            alert(res.data.message)
        }
    }

    render() {
        return (
            <div className='login-container'>
                <img className='bank-logo' src={logo} alt="" />
                <form>
                    <div>
                        <label htmlFor="">Email:</label>
                        <br />
                        <input onChange={(e) => this.updateEmail(e)} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Password:</label>
                        <br />
                        <input onChange={(e) => this.updatePassword(e)} type="text" />
                    </div>
                    <button onClick={() => this.login()} type='button'>Login</button>
                    <button onClick={() => this.signup()} type='button'>Signup</button>
                </form>
            </div>
        )
    }
}