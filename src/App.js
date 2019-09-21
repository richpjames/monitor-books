import React, { Component } from "react";
import "./App.css";
import Slideshow from "./Components/Slideshow";
import MainPage from "./Components/MainPage";

export default class App extends Component {
  state = {
    showImage: false
  };
  render() {
    { var owa_baseUrl = 'http://monitorbooks.co.uk/owa/';
    var owa_cmds = owa_cmds || [];
    owa_cmds.push(['setSiteId', '942b7c4e9eb62f028a65f936a21188dc']);
    owa_cmds.push(['trackPageView']);
    owa_cmds.push(['trackClicks']);
    (function() {
        var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
        owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl );
        _owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
        var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
    }());}
    const { showImage } = this.state;
    return <>{showImage ? <Slideshow /> : <MainPage />}</>;
  }
  componentDidMount = () => {
    setTimeout(
      function() {
        this.setState({ showImage: false });
      }.bind(this),
      3000
    );
  };
}
