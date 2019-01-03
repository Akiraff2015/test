import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register: {
                username: "",
                password: "",
                email: "",
            }
        };
    }

    handleSubmitForm(e) {
        e.preventDefault();
        const data = this.state.register;
        let register = {...this.state.register};

        if (register.username.length > 0 || register.email > 0 || register.password > 0) {
            axios.post('/register', data).then(res => console.log(res)).catch(err => console.log(err));

            // Reset form value
            register.username = "";
            register.email = ""
            register.password = "";
            this.setState({register});
            setTimeout(() => window.location = '/login', 2000);
        }
    }

    handleUserValue(e) {
        let register = {...this.state.register};
        register.username = e.target.value;

        this.setState({register});
    }

    handleEmailValue(e) {
        let register = {...this.state.register};
        register.email = e.target.value;

        this.setState({register});
    }

    handlePasswordValue(e) {
        let register = {...this.state.register};
        register.password = e.target.value;

        this.setState({register});
    }

    render () {
        return (
            <form>
                <label>Username</label>
                <input value={this.state.register.username} name="username" onChange={this.handleUserValue.bind(this)} type="string" />

                <label>E-mail</label>
                <input value={this.state.register.email} name="email" onChange={this.handleEmailValue.bind(this)} type="email" />

                <label>Password</label>
                <input value={this.state.register.password} name="password" onChange={this.handlePasswordValue.bind(this)} type="password" />

                <button onClick={this.handleSubmitForm.bind(this)}>Register</button>
            </form>
        );
    }
}

export default RegisterForm;