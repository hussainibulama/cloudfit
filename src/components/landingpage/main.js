import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import check from "../images/check.png";
import quote from "../images/quote.png";
import person from "../images/person.png";
import persons from "../images/persons.png";
import PArrow from "../images/PArrow.png";
import NArrow from "../images/NArrow.png";
import location from "../images/location.png";
import a1 from "../images/a1.png";
import a2 from "../images/a2.png";
import a3 from "../images/a3.png";
import b1 from "../images/b1.png";
import b2 from "../images/b2.png";
import b3 from "../images/b3.png";
import b4 from "../images/b4.png";
import b5 from "../images/b5.png";
import b6 from "../images/b6.png";
import b7 from "../images/b7.png";
import b8 from "../images/b8.png";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import c5 from "../images/c5.png";
import c6 from "../images/c6.png";
import c7 from "../images/c7.png";
import c8 from "../images/c8.png";
import q1 from "../images/q1.png";
import q4 from "../images/q4.png";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 2,
      active: 1,
    };
  }
  async next(value) {
    if (value === "next") {
      if (this.state.active === 2) {
        this.state.active -= 1;
        this.setState({ active: this.state.active });
      } else {
        this.state.active += 1;
        this.setState({ active: this.state.active });
      }
    } else {
      if (this.state.active === 2) {
        this.state.active -= 1;
        this.setState({ active: this.state.active });
      } else {
        this.state.active += 1;
        this.setState({ active: this.state.active });
      }
    }
  }
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="wrapchild0">
            <div className="alone">
              <h1>Recommended Jobs</h1>
            </div>
            <div className="scroller">
              <div className="single-scroll">
                <div className="lefty">
                  <div className="stamp">
                    <p>Full time</p>
                  </div>
                </div>

                <div className="centroid">
                  {" "}
                  <img src={q1} alt="img" />
                  <p>QA Engineer</p>
                </div>
                <hr />
                <div className="footroid">
                  <p>Paystack </p>
                  <div className="slitch">
                    <div>
                      <p>
                        <img src={location} alt="location" />
                        &nbsp;Lagos, Nigeria
                      </p>
                    </div>
                    <div>
                      <a href="http:/a.com">Apply now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-scroll">
                <div className="lefty">
                  <div className="stamp">
                    <p>Part time</p>
                  </div>
                </div>

                <div className="centroid">
                  {" "}
                  <img src={c4} alt="img" />
                  <p>QA Engineer</p>
                </div>
                <hr />
                <div className="footroid">
                  <p>Google </p>
                  <div className="slitch">
                    <div>
                      <p>
                        <img src={location} alt="location" />
                        &nbsp;Lagos, Nigeria
                      </p>
                    </div>
                    <div className="wrapa">
                      <a href="http:/a.com">Apply now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-scroll">
                <div className="lefty">
                  <div className="stamp">
                    <p>Full time</p>
                  </div>
                </div>

                <div className="centroid">
                  {" "}
                  <img src={c7} alt="img" />
                  <p>HR Manager</p>
                </div>
                <hr />
                <div className="footroid">
                  <p>Flutterwave </p>
                  <div className="slitch">
                    <div>
                      <p>
                        <img src={location} alt="location" />
                        &nbsp;Lagos, Nigeria
                      </p>
                    </div>
                    <div>
                      <a href="http:/a.com">Apply now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-scroll">
                <div className="lefty">
                  <div className="stamp">
                    <p>Full time</p>
                  </div>
                </div>

                <div className="centroid">
                  {" "}
                  <img src={q4} alt="img" />
                  <p>QA Engineer</p>
                </div>
                <hr />
                <div className="footroid">
                  <p>Access Bank </p>
                  <div className="slitch">
                    <div>
                      <p>
                        <img src={location} alt="location" />
                        &nbsp;Lagos, Nigeria
                      </p>
                    </div>
                    <div>
                      <a href="http:/a.com">Apply now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-scroll">
                <div className="lefty">
                  <div className="stamp">
                    <p>Full time</p>
                  </div>
                </div>

                <div className="centroid">
                  {" "}
                  <img src={q1} alt="img" />
                  <p>QA Engineer</p>
                </div>
                <hr />
                <div className="footroid">
                  <p>Paystack </p>
                  <div className="slitch">
                    <div>
                      <p>
                        <img src={location} alt="location" />
                        &nbsp;Lagos, Nigeria
                      </p>
                    </div>
                    <div>
                      <a href="http:/a.com">Apply now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="arrows">
                {this.state.active === 1 && (
                  <button onClick={() => this.next("prev")}>
                    <img className="change" src={NArrow} alt="quote" />
                  </button>
                )}
                {this.state.active === 2 && (
                  <button onClick={() => this.next("prev")}>
                    <img src={PArrow} alt="quote" />
                  </button>
                )}
                {this.state.active === 2 && (
                  <button onClick={() => this.next("next")}>
                    <img src={NArrow} alt="quote" />
                  </button>
                )}
                {this.state.active === 1 && (
                  <button onClick={() => this.next("next")}>
                    <img className="change" src={PArrow} alt="quote" />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="wrapchild1">
            <Grid>
              <Cell col={7}>
                <Grid>
                  <Cell col={6}>
                    <div className="heighter">
                      <div className="imgs">
                        <img src={a1} alt="pic" />
                        <h4>
                          Product Analyst <span>@ Paystack</span>
                        </h4>
                      </div>
                      <div className="imgs">
                        <img src={a2} alt="pic" />
                        <h4>
                          Securities Trader<span> @ Mckinnesy</span>
                        </h4>
                      </div>
                    </div>
                  </Cell>
                  <Cell col={6}>
                    <div className="lone">
                      <div className="imgs">
                        <img src={a3} alt="pic" />
                        <h4>
                          HR Manager<span>@ Paystack</span>
                        </h4>
                      </div>
                    </div>
                  </Cell>
                </Grid>
              </Cell>
              <Cell col={5}>
                <div className="main-body">
                  <h1>How it works</h1>
                  <p>
                    Get a job helps you find the right job easily. Getajob helps
                    you find the right job easily. Getajob helps you find the
                    right job easily.
                  </p>
                  <h3>
                    <img src={check} alt="pic" />
                    &nbsp; Search Jobs
                  </h3>
                  <p>
                    We have jobs in the most popular industries and with top
                    companies. Plus, you can create alerts so you never miss a
                    job opportunity.
                  </p>
                  <h3>
                    <img src={check} alt="pic" />
                    &nbsp; Create a Profile and Get Noticed
                  </h3>
                  <p>
                    Create a profile to showcase your skills and experience so
                    recruiters can find you. Upload your CV so you can apply for
                    jobs quickly and easily.
                  </p>
                  <h3>
                    <img src={check} alt="pic" />
                    &nbsp; Apply for jobs
                  </h3>
                  <p>
                    Find the training you need to improve your skills, or visit
                    our Career Center for tips and advice to build your career.
                  </p>
                </div>
              </Cell>
            </Grid>
          </div>
          <div className="wrapchild2">
            <div style={{ textAlign: "center", width: "100%" }}>
              <h1>Popular Categories</h1>
            </div>
            <div className="broxer">
              <div className="boxer">
                <div className="img">
                  <img src={b1} alt="royal" />
                </div>
                <div>
                  <h3>Oil and Gas</h3>
                  <p>(20 new jobs )</p>
                </div>
              </div>
              <div className="boxer">
                <div className="img">
                  <img src={b2} alt="royal" />
                </div>
                <div>
                  <h3>Healthcare</h3>
                  <p>(10 new jobs )</p>
                </div>
              </div>
              <div className="boxer">
                <div className="img">
                  <img src={b3} alt="royal" />
                </div>
                <div>
                  <h3>Education</h3>
                  <p>(10 new jobs )</p>
                </div>
              </div>
              <div className="boxer">
                <div className="img">
                  <img src={b4} alt="royal" />
                </div>
                <div>
                  <h3>Accounting</h3>
                  <p>(10 new jobs )</p>
                </div>
              </div>
              <div className="boxer">
                <div className="img">
                  <img src={b5} alt="royal" />
                </div>
                <div>
                  <h3>Design, Art and Multimedia</h3>
                  <p>(20 new jobs )</p>
                </div>
              </div>
              <div className="boxer">
                <div className="img">
                  <img src={b6} alt="royal" />
                </div>
                <div>
                  <h3>Technology</h3>
                  <p>(10 new jobs )</p>
                </div>
              </div>
              <div className="boxer">
                <div className="img">
                  <img src={b7} alt="royal" />
                </div>
                <div>
                  <h3>Security</h3>
                  <p>(10 new jobs )</p>
                </div>
              </div>
              <div className="boxer">
                <div className="img">
                  <img src={b8} alt="royal" />
                </div>
                <div>
                  <h3>Data Analyst</h3>
                  <p>(10 new jobs )</p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapchild3">
            <Grid>
              <Cell col={6}>
                <div className="slow1">
                  <h1>Over 1000+ jobs from top companies in our network</h1>
                  <p>
                    Every day we index millions of jobs directly from employer
                    websites. We’re committed to accurate, high-quality jobs so
                    you won’t find old, duplicated, or spammy listings here.
                  </p>
                  <p>
                    Organize and automate your job search while at home or on
                    the go. We’ll deliver new, relevant jobs of interest
                    straight to your inbox.
                  </p>
                  <a href="http://logo.com">
                    Learn More{" "}
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3651 7.05991L10.3851 12.0599C10.2251 12.2199 10.0251 12.2999 9.82509 12.2999C9.62509 12.2999 9.42509 12.2199 9.26509 12.0599C8.94509 11.7399 8.94509 11.2399 9.26509 10.9199L12.8851 7.27991H1.20509C0.76509 7.27991 0.40509 6.91991 0.40509 6.47991C0.40509 6.03991 0.76509 5.67991 1.20509 5.67991H12.8851L9.26509 2.03991C8.94509 1.71991 8.94509 1.21991 9.26509 0.899912C9.58509 0.579912 10.0851 0.579912 10.4051 0.899912L15.3851 5.89991C15.6851 6.23991 15.6851 6.75991 15.3651 7.05991Z"
                        fill="#06942A"
                      />
                    </svg>
                  </a>
                </div>
              </Cell>
              <Cell col={6}>
                <div className="rolls">
                  <div className="roller">
                    <img src={c1} alt="roller" />
                  </div>
                  <div className="roller shifter">
                    <img src={c2} alt="roller" />
                  </div>
                  <div className="roller">
                    <img src={c3} alt="roller" />
                  </div>
                  <div className="roller">
                    <img src={c4} alt="roller" />
                  </div>
                  <div className="roller shifter">
                    <img src={c5} alt="roller" />
                  </div>
                  <div className="roller">
                    <img src={c6} alt="roller" />
                  </div>
                  <div className="roller">
                    <img src={c7} alt="roller" />
                  </div>
                  <div className="roller">
                    <img src={c8} alt="roller" />
                  </div>
                </div>
              </Cell>
            </Grid>
          </div>
          <div className="wrapchild4">
            <div className="wraptop">
              <h1>What are our customers saying</h1>
            </div>
            <div className="arrows">
              {this.state.active === 1 && (
                <button onClick={() => this.next("prev")}>
                  <img className="change" src={NArrow} alt="quote" />
                </button>
              )}
              {this.state.active === 2 && (
                <button onClick={() => this.next("prev")}>
                  <img src={PArrow} alt="quote" />
                </button>
              )}
              {this.state.active === 2 && (
                <button onClick={() => this.next("next")}>
                  <img src={NArrow} alt="quote" />
                </button>
              )}
              {this.state.active === 1 && (
                <button onClick={() => this.next("next")}>
                  <img className="change" src={PArrow} alt="quote" />
                </button>
              )}
            </div>
            <div className="contents">
              <Grid>
                <Cell col={4}>
                  <div className="oily">
                    <img src={person} alt="quote" />
                    <img className="hid" src={persons} alt="quote" />
                  </div>
                </Cell>
                <Cell col={8}>
                  {this.state.active === 1 && (
                    <div className="datum">
                      <img src={quote} alt="quote" />
                      <p>
                        The platform is really convenient to reach out to
                        companies & I have managed to secure 2 interviews
                        already! I can also track my application status instead
                        of wondering whether the company has seen or shortlisted
                        me
                      </p>
                      <h3>Irma Black</h3>
                      <p>HR Manager at MasterCard</p>
                    </div>
                  )}
                  {this.state.active === 2 && (
                    <div className="datum" style={{ width: "85%" }}>
                      <img src={quote} alt="quote" />
                      <p>
                        The platform is really convenient to reach out to
                        companies & I have managed to secure 2 interviews
                        already! I can also track my application status instead
                        of wondering whether the company has seen or shortlisted
                        me
                      </p>
                      <h3>Hussaini Bulama</h3>
                      <p>Full Stack Software Engineer</p>
                    </div>
                  )}
                </Cell>
              </Grid>
            </div>
          </div>
          <div className="wrapchild5">
            <Grid>
              <Cell col={5}></Cell>
              <Cell col={7}>
                <div className="toto">
                  <h1>Get a Job you actually like</h1>
                  <p>Create an account and start applying</p>
                  <button>Get started</button>
                </div>
              </Cell>
            </Grid>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
