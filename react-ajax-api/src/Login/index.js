//  ES6 Destructuring - Give us Component in a variable, vs using React.Component
import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleInput = (e) => {
        this.setState({  
            // [e.target.name] is short for:
            // let someObject = {}
            // someObject[username] = e.target.username
            [e.target.name]: e.target.value,  
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit is working');

        // calling the login function that was created in App.js and sent down as props
        this.props.login(this.state.username, this.state.password)        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='username' onChange={this.handleInput} value={this.state.username} placeholder='username' />
                <input type='password' name='password' onChange={this.handleInput} value={this.state.password} placeholder='password' />
                <input type='submit' value='Submit' />
            </form>
        )
    }
};

export default Login;