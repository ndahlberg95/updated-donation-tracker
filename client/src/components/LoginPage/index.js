import React from 'react';
import './index.css';

function Login() {

    return (

        <body>

            <form class="login-form">
                <h4 class="">Login</h4>

                <div>

                    <h5 class="">Username</h5>
                    <input type="text" id="username-login"/>
                    <h5 class="">Password</h5>
                    <input type="password" id="password-login"/>
                    <button type="submit">Login</button>

                </div>
            </form>

            <div class="login-center">
                <h3>Don't Have an Account? Signup Below!</h3>
            </div>


            <form class="signup-form">
                <h4 class="">Signup</h4>

                <div>

                    <h5>Username</h5>
                    <input type="text" name="" id="username-signup"/>
                    <h5>Email</h5>
                    <input type="text" id="email-signup"/>
                    <h5>Password</h5>
                    <input type="password" id="password-signup"/>
                    <button type="submit">Signup</button>

                </div>
            </form>
        </body>
    )
}

export default Login;