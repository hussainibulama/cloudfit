import React, { Component } from "react";
import logo from "../images/logo2.png";
import lin from "../images/LinkedIn.png";
import fa from "../images/Facebook.png";
import twi from "../images/Twitter.png";
import ins from "../images/Instagram.png";
import { Grid, Cell } from "react-mdl";

class Bottom extends Component {
  render() {
    return (
      <div className="bottom">
        <div className="wrapper">
          <hr />
          <Grid>
            <Cell col={3}>
              <div className="PP">
                <img src={logo} alt="logo" />
                <p>
                  Get a job ng provides a full online service for anyone looking
                  for a new job. We're not a recruitment agency, we're a job
                  site.
                </p>
              </div>
            </Cell>
            <Cell col={2}>
              <ul>
                <li className="bottom">Information</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms & Condition</li>
              </ul>
            </Cell>
            <Cell col={2}>
              <ul>
                <li className="bottom">Job Seekers</li>
                <li>Create Account</li>
                <li>Job List</li>
                <li>FAQ</li>
              </ul>
            </Cell>
            <Cell col={2}>
              <ul>
                <li className="bottom">Employers</li>
                <li>Create Account</li>
                <li>Post a Job</li>
                <li>FAQ</li>
              </ul>
            </Cell>
            <Cell col={3}>
              <ul>
                <li className="bottom">Social Media:</li>
                <li>
                  <img src={ins} alt="img" />
                  <img src={twi} alt="img" />
                  <img src={fa} alt="img" />
                  <img src={lin} alt="img" />
                </li>
              </ul>
            </Cell>
          </Grid>
          <div className="copyright">
            <center>© Copyright Get-A-Job RMS 2019, All right reserved</center>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottom;
