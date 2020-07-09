import React from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => 
            this.setState({
                [field]: e.currentTarget.value
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.email}
                    onChange={this.update('email')}
                />
                <input
                     value={this.state.password}
                     onChange={this.update('password')}
                />
                <input type="submit"
                    value='Log In'
                />
            </form>
        )
    }

};

export default LoginForm;