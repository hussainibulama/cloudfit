import React, { Component } from "react";
import location from "../images/location.png";
import q1 from "../images/q1.png";
import q4 from "../images/q4.png";
import c7 from "../images/c7.png";
import c4 from "../images/c4.png";
import PArrow from "../images/PArrow.png";
import NArrow from "../images/NArrow.png";
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: false,
      activeslide: 1,
      maximum: 5,
    };
  }
  async next() {
    if (this.state.activeslide === this.state.maximum) {
      this.setState({ activeslide: 1 });
    } else {
      this.state.activeslide += 1;
      this.setState({ activeslide: this.state.activeslide });
    }
  }
  render() {
    return (
      <>
        <div className="web">
          <div className="wrapchild0">
            <div className="alone">
              <h1>Recommended Jobs</h1>
            </div>

            <div className="scroller">
              {this.state.slider === false && (
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
                        <a href="/">Apply now</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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
                      <a href="/">Apply now</a>
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
                      <a href="/">Apply now</a>
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
                      <a href="/">Apply now</a>
                    </div>
                  </div>
                </div>
              </div>
              {this.state.slider === true && (
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
                        <a href="/">Apply now</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="ark">
                <div className="arrows">
                  {this.state.slider === false && (
                    <button
                      onClick={() =>
                        this.setState({ slider: !this.state.slider })
                      }
                    >
                      <img className="change" src={NArrow} alt="quote" />
                    </button>
                  )}
                  {this.state.slider === true && (
                    <button
                      onClick={() =>
                        this.setState({ slider: !this.state.slider })
                      }
                    >
                      <img src={PArrow} alt="quote" />
                    </button>
                  )}
                  {this.state.slider === true && (
                    <button
                      onClick={() =>
                        this.setState({ slider: !this.state.slider })
                      }
                    >
                      <img src={NArrow} alt="quote" />
                    </button>
                  )}
                  {this.state.slider === false && (
                    <button
                      onClick={() =>
                        this.setState({ slider: !this.state.slider })
                      }
                    >
                      <img className="change" src={PArrow} alt="quote" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile">
          <div className="wrapchild0">
            <div className="alone">
              <h1>Recommended Jobs</h1>
            </div>
            <div className="scroller">
              {this.state.activeslide === 1 && (
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
                        <a href="/">Apply now</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {this.state.activeslide === 2 && (
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
                        <a href="/">Apply now</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {this.state.activeslide === 3 && (
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
                        <a href="/">Apply now</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {this.state.activeslide === 4 && (
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
                        <a href="/">Apply now</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {this.state.activeslide === 5 && (
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
                        <a href="/">Apply now</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="ark">
                <div className="arrows">
                  {this.state.activeslide === 1 && (
                    <button onClick={() => this.next()}>
                      <img className="change" src={NArrow} alt="quote" />
                    </button>
                  )}
                  {this.state.activeslide !== 1 && (
                    <button onClick={() => this.next()}>
                      <img src={PArrow} alt="quote" />
                    </button>
                  )}
                  {this.state.activeslide !== 5 &&
                    this.state.activeslide !== 1 && (
                      <button onClick={() => this.next()}>
                        <img src={NArrow} alt="quote" />
                      </button>
                    )}
                  {this.state.activeslide === 5 ||
                    (this.state.activeslide === 1 && (
                      <button onClick={() => this.next()}>
                        <img className="change" src={PArrow} alt="quote" />
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Slider;
