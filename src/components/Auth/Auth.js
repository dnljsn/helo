import React, { Component } from 'react';
import logo from './helo-logo.png';
import axios from 'axios';
import './Auth.css';

export default class Auth extends Component {

    state = {
        username: '',
        password: ''
    }

    updateUsername(e) {
        this.setState({ username: e.target.value });
    }

    updatePassword(e) {
        this.setState({ password: e.target.value })
    }

    async login() {
        if (!this.state.username || !this.state.password) return alert('Please fill out username and password.')
        let res = await axios.post('/auth/login', {
            username: this.state.username,
            password: this.state.password
        })
        if (res.data.message === 'loggedIn') {
            this.props.history.push('/dashboard')
        } else {
            alert(res.data.message)
        }
    }

    async signup() {
        if (!this.state.username || !this.state.password) return alert('Please fill out username and password.')
        let res = await axios.post('/auth/signup', {
            username: this.state.username,
            password: this.state.password
        })
        if (res.data.message === 'loggedIn') {
            this.props.history.push('/dashboard')
        } else {
            alert(res.data.message)
        }
    }

    render() {
        return (
            <div className='login-container'>
                <div className='form-container'>
                    <img className='logo' src={logo} alt="" />
                    <h1 className='login_title'>Helo</h1>
                    <form className='login_input_box'>
                    <div>
                        <label className='label-font' htmlFor="">Username:</label>
                        <input onChange={(e) => this.updateUsername(e)} type="text" />
                    </div>
                    <div>
                        <label className='label-font' htmlFor="">Password: </label>
                        <input onChange={(e) => this.updatePassword(e)} type="text" />
                    </div>
                    <button onClick={() => this.login()} type='button'>Login</button>
                    <button onClick={() => this.signup()} type='button'>Signup</button>
                    </form>
                    </div>
            </div>
        )
    }
}