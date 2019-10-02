import React from "react";
import "./App.css";

class Webpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openhamb: false
    };
  }
  clickhamburger = () => {
    this.setState({
      openhamb: !this.state.openhamb
    });
  };
  render() {
    return (
      <div className="main">
        <header className="navbar">
          <div className="logo">
            <img
              className="zil-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytVxByXNGdz4_kxYa6pA4wm-8uaMLorOXDAyGRfZCjb23vPqkQg"
            />
          </div>
          <ul className="left-list">
            <li>Buy</li>
            <li>Sell</li>
            <li>Rent</li>
            <li>HomeLoans</li>
            <li>Agent Finder</li>
          </ul>
          <ul className="right-list">
            <li>List your referal</li>
            <li>Advertise</li>
            <li>Signup/Signin</li>
            <div className="hamburger" onClick={this.clickhamburger}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </ul>
        </header>
        <hr></hr>
        {this.state.openhamb ? (
            <div className="hamburger-popup">
              <ul>
                <li>About Us</li>
                <li>Curious</li>
                <li>Explore</li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        <h1 className="zil-headline">
          We have the most listings and constant updates. So you’ll never miss
          out.
        </h1>
        <div className="borderwidth"></div>
        <div className="grid">
          <div className="grid-styling">
            <h1>Curious Webpage</h1>
          </div>
        </div>
        <div className="first-grid-style">
          <div className="blank"></div>
          <div className="join-us">
            <h1 className="side-header">nsksklsdlksdlksdlkdskl</h1>
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytVxByXNGdz4_kxYa6pA4wm-8uaMLorOXDAyGRfZCjb23vPqkQg"></img>
            <p>Created by VIACOM Tech</p><span><button className="button-click">VIACOM</button></span>
            <hr></hr>
            <h2>JOIN US</h2> 
            <p>loremepsum loremepsum loremepsum loremepsum</p>
            <input type="email" placeholder="Email"></input>
            <button className="button-click-signup">Signup</button>
          </div>
        </div>
       <div className="second-grid-style">
       <div className="blank-grids"></div>
       <div  className="blank-grids"></div>
       <div  className="blank-grids"></div>
       <div  className="blank-grids"></div>
       </div>
       <div>
         <div>

         </div>
         <div></div>
         <div>

         </div>
       </div>
       <div className="last-grid"> Advertise: US via FB, Whatsapp number</div>
      </div>
    );
  }
}

export default Webpage;
