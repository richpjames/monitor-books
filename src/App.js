import React, { Component } from "react";
import "./App.css";
import Slideshow from "./Components/Slideshow";
import MurmurBook from "./Components/MurmurBook";

export default class App extends Component {
  state = {
    showImage: true
  };
  render() {
    const { showImage } = this.state;
    return <>{showImage ? <Slideshow /> : <MurmurBook />}</>;
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
