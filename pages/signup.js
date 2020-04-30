import React, { Component } from 'react';
import axios from 'axios'
import Config from '../sdk/Config'


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: false,
        }
    }

    async SignupUser() {
        if (this.state.username != '' || this.state.password != '') {
            const url = Config.PATH + '/api/users/signup'
            let data = []
            data = { username: this.state.username, password: this.state.password }
            await axios.post(url, {
                data
            }).then(function (response) {
                alert('User Signup Successfully')
            }).catch(function (error) {
                alert('Error: ');
            });
            this.setState({ error: false })
        } else {
            this.setState({ error: true })
        }
    }

    render() {
        return (
            <>
                <div className='div'>

                    <label >User name:</label>
                    <input type="text" onChange={(e) => this.setState({ username: e.target.value })} placeholder="Enter user name" />

                    <br />

                    <label >Password:</label>
                    <input type="password" onChange={(e) => this.setState({ password: e.target.value })} placeholder="Enter password" />
                    {this.state.error ? <label style={{ color: 'red' }}>Enter username and password</label> : null}
                    <br />
                    <button onClick={this.SignupUser.bind(this)}>Signup</button>
                </div>
                <style jsx>
                    {`
                        .div {
                            margin: 10%;
                            padding: 2%;
                            background: lightgray;
                            display: flex;
                            align-items: center;
                            justify-content: center
                        }
                    `}
                </style>
            </>
        );
    }
}

export default Signup