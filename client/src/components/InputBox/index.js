import React from 'react';
import './index.css'


function InputBox() {

    return (

        <body>
            <div className="column">
            
                {/* <!-- Donation Input Fields --> */}
                <div>
                    <form>
                        <div className="donation-input">
                            {/* <!-- Item Name (Text Field)--> */}
                            <div className="field">
                                <label className="label">
                                    <h3>Item Name</h3>
                                </label>
                                <div className="control">
                                    <input className="input item-name" type="text" placeholder="e.g Toothpaste">
                                    </input>
                                </div>

                                {/* <!-- Item Category (Drop Down Menu)--> */}


                                <div className="field">
                                    {/* <!-- Value (Text Field)--> */}
                                    <div className="field has-addons has-addons-right">


                                    </div>
                                    {/* <!--GIF Displayed--> */}
                                    {/* <!--local storage save--> */}
                                    <div className="result"></div>



                                    <button className="save" type="submit">
                                        Submit Donation
                                    </button>

                                    {/* <!--GIF Displayed--> */}
                                    {/* <div className="myDIV" className="myDIV">
                                        <iframe src="https://giphy.com/embed/l0MYt5jPR6QX5pnqM" width="480" height="270" frameBorder="0"
                                            className="giphy-embed" allowFullScreen></iframe>
                                        <p><a href="https://giphy.com/gifs/party-the-office-hard-l0MYt5jPR6QX5pnqM">via GIPHY</a></p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </body>
       
    )
}

export default InputBox;