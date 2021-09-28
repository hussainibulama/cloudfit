import React, { Component } from "react";
import Top from "./top";
import Bottom from "./bottom";
import Main from "./main";
import "../styles/style.scss";
class Index extends Component {
  render() {
    return (
      <>
        <div className="general">
          <div>
            <Top />
          </div>
          <div>
            <Main />
          </div>
          <div>
            <Bottom />
          </div>
        </div>
      </>
    );
  }
}

export default Index;
