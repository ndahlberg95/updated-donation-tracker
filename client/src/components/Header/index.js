import React from 'react';

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
                            <img src="./assets/images/logo-white.png" alt="YWCA Utah Logo"></img>
                        </figure>

                    </div>
                </div>
            </nav>
        </header>
    
    );
    
}

export default Header;