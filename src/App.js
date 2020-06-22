import React, { Component } from "react";
import "./App.css";
import Slideshow from "./Components/Slideshow";
import MainPage from "./Components/MainPage";
import ReactGA from 'react-ga'

export default class App extends Component {
  state = {
    showImage: true
  };
  render() {
    ReactGA.initialize('UA-148432308-1');
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
