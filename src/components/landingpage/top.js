import React, { Component } from "react";
import logo from "../images/logo.png";
import light from "../images/light.png";
import lighter from "../images/lighter.png";
import hero from "../images/hero-image.png";
import kpmg from "../images/kpmg-removebg-preview.png";
import google from "../images/google-removebg-preview.png";
import paystack from "../images/paystack-removebg-preview.png";
import location from "../images/location.png";
import search from "../images/search.png";
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burger: false,
    };
  }

  render() {
    return (
      <>
        <div className="topper">
          <div className="bg-animate">
            <img className="indexer" src={light} alt="logo" />
            <img className="opacity" src={lighter} alt="logo" />
          </div>

          <div className="top">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="menu">
              <ul>
                <li>Companies</li>
                <li>Candidates</li>
                <li>Assessment</li>
                <li>Post a Job</li>
                <li>Career</li>
                <li> Advice</li>
              </ul>
            </div>
            <div className="dashbaord">
              <ul>
                <li className="menu">Sign Up</li>
                <li className="differ"> Log In</li>
                <li className="burger">
                  {" "}
                  <div>
                    <FontAwesomeIcon
                      onClick={() =>
                        this.setState({ burger: !this.state.burger })
                      }
                      icon={faBars}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {this.state.burger === true && (
          <div className="burger-menu">
            <div className="menu">
              <ul>
                <li>Companies</li>
                <li>Candidates</li>
                <li>Assessment</li>
                <li>Post a Job</li>
                <li>Career</li>
                <li> Advice</li>
                <li>Sign Up</li>
              </ul>
            </div>
          </div>
        )}

        <div className="subtopper">
          <Grid className="demo-grid-1">
            <Cell col={6}>
              <div className="top-body">
                <h1>
                  Find a <span>job</span> easily
                </h1>
                <p>
                  With verified, up-to-date job listings directly from employer
                  websites, we create a premium experience for job seekers,
                  employers, and data seekers alike.
                </p>
                <div className="input-flex">
                  <div className="input-ele">
                    <div>
                      <input
                        type="text"
                        placeholder="Enter keywords, skill, interest "
                      />
                    </div>
                    <div className="raba">
                      <img src={location} alt="location" />
                    </div>
                    <div>
                      <input type="text" placeholder="Location" />
                    </div>
                  </div>
                  <button type="submit">
                    <img src={search} alt="search" />
                  </button>
                </div>

                <p style={{ fontWeight: "bolder" }}>Trusted by:</p>
                <div className="flexer">
                  <img src={paystack} alt="img" />
                  <img src={google} alt="img" />
                  <img src={kpmg} alt="img" />
                </div>
              </div>
            </Cell>
            <Cell col={6}>
              <div className="hero-image">
                <img className="opacity" src={hero} alt="logo" />
              </div>
            </Cell>
          </Grid>
        </div>
      </>
    );
  }
}

export default Top;
