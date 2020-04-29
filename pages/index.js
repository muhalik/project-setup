import React, { Component } from 'react';
import Link from 'next/link'
class Index extends Component {
    state = {}
    render() {
        return (
            <>
                <div className='div'>
                    <nav>
                        <ul>
                            <li>
                                <Link href='/users'>Login</Link>
                            </li>
                            <br />
                            <li>
                                <Link href='/signup'>Signup</Link>
                            </li>
                        </ul>
                    </nav>

                    <style jsx>
                        {`
                        .div {
                            width: 100%;
                            height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center
                        }

                    `}
                    </style>
                </div>
            </>
        );
    }
}

export default Index;
