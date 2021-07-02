import React from 'react';
import logo from '../../assets/images/logo-white.png';
import './index.css';



async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }

    // when you logout, you are taken to "Login"
}
  
//   document.querySelector('#logout').addEventListener('click', logout);


function Header() {
    return ( 
        <header className="header">

{/* //   Company Name/Logo  */}


            <nav className="level">
{/* //    left side */}
                <div className="level-left">
                    <div className="level-item">
                        <h2 className="title is-2 has-text-white">Donation Tracker
                        </h2>
                    </div>
                    <div className="level-item">
                    </div>
                </div>

    {/* // Right side  */}
                <div className="level-right">
                    <div className="card-image">
                        <figure className="image is-128x128">
                            <img src={logo} alt="YWCA Utah Logo"></img>
                        </figure>
                        <button className="logout">LOGOUT</button>
                    </div>
                </div>
            </nav>
        </header>
    
    );
    
}

export default Header;