import React, { Component } from 'react';
import axios from 'axios'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    async componentDidMount() {
        const currentComponent = this

        const url = Config.PATH + '/api/users/'
        await axios.get(url).then((response) => {
            console.log('Users:', response.data.data)
            currentComponent.setState({ users: response.data.data })
        }).catch((error) => {
            alert('Data Fetchig Error: ', error)
        });
    }

    render() {
        return (
            <>
                <div className='div'>
                    {this.state.users && this.state.users.map(element =>
                        <>
                            <label>User Name:</label>
                            <label>{users.username}</label>
                            <label>Password:</label>
                            <label>{users.password}</label>
                            <br />
                            <br />
                        </>
                    )}
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

export default Users