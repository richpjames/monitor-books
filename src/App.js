import React, { Component } from "react";
import "./App.css";
import Slideshow from "./Components/Slideshow";
import MainPage from "./Components/MainPage";

export default class App extends Component {
  state = {
    showImage: true
  };
  render() {
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
