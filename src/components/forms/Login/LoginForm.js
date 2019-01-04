import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: {
                email: "",
                password: ""
            }
        };
    }

    handleSubmitForm(e) {
        e.preventDefault();
        const data = this.state.login;
        let login = {...this.state.login};

        if (login.email.length > 0 || login.password.length > 0) {
            axios.post('/login', data).then(res => console.log(res)).catch(err => console.log(err));

            // Reset form value
            login.email = ""
            login.password = "";
            this.setState({login});
            // setTimeout(() => window.location = '/dashboard', 2000);
        }
    }

    handleEmailValue(e) {
        let login = {...this.state.login};
        login.email = e.target.value;

        this.setState({login});
    }

    handlePasswordValue(e) {
        let login = {...this.state.login};
        login.password = e.target.value;

        this.setState({login});
    }

    render() {
        return (
            <form>
                <label>E-mail</label>
                <input value={this.state.login.email} name="email" onChange={this.handleEmailValue.bind(this)} type="email" />

                <label>Password</label>
                <input value={this.state.login.password} name="password" onChange={this.handlePasswordValue.bind(this)} type="password" />

                <button onClick={this.handleSubmitForm.bind(this)}>Login</button>
            </form>
        );
    }
}

export default LoginForm;