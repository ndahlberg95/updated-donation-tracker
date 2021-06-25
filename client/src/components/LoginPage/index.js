import React from 'react';
function LoginPage(props) {
    return (
        //When State is false (default) 
        //It means that the user is logged in. 
        //When the state is set to true, then the user is Logged out.
        //This shold be useful to design the Login and Logout page with
        //You can probably condense this into one page
        <div>
            {props.loggedIn ?
                <div>
                    <h1>Please Log in!</h1>
                </div> :
                <div>
                    <h1>Welcome to the site!</h1>
                </div>}
        </div>
    )
}
export default LoginPage;