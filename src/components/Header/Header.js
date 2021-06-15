import React from 'react';

const Header = () => {
    return (
        <div className="ui secondary pointing menu" style={{margin: '0px', backgroundColor: 'white'}}>  
            <i className="edit icon change big" style={{marginTop:'10px', marginLeft:'20px'}}></i>
            <div className="right menu">
                <div className="item">
                    Gmail
                </div>
                <div className="item">
                    Images
                </div>
                <div className="item">
                    <i className="icon th"></i>
                </div>
                <div className="item">
                    <button className="circular ui icon red button">
                    <i className="icon user"></i>
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Header;