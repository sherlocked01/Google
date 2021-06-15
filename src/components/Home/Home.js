import React from 'react';
import './Home.css';
// import Search from '../../images/search-icon.png';
const Home = props => {
  return (
    <div className="content-box">
      <div>
        <svg style={{width: '100%', height: '220px'}}>
          <text x="50%" y="60%"  textAnchor="middle">Google</text>
        </svg>
      </div>

      <div className="ui category search">
        <div className="ui icon input f4 pa2 width center radius input">
          <input className="prompt" type="text" placeholder="Search google or type a URL" />
          <i className="search icon " style={{margin: '0px 18px 18px 0px'}} ></i>
        </div>
      </div>
      
      

      {/* <div className="inline">
        <div className="ui primary button">Clear Query</div>
        <div className="ui primary button">Clear Query</div>
      </div> */}
    </div>
  );
};

export default Home;