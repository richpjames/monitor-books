import React, {Component} from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import BookDetails from './book_page/BookDetails';
import Footer from "./Footer";
import About from './About';

const BookWrap = styled.div`
  width: 70vw;
  margin: 0 auto;
`;

export default class MainPage extends Component {
  state = {
    bookPage: false,
  }
  setBookPage = () => {
    if(this.state.bookPage === false){
   this.setState({bookPage: true});
    }if(this.state.bookPage === true){
      this.setState({bookPage: false})
    }
  }
   render(){
     const {bookPage} = this.state;
  return (
    <BookWrap>
      <NavBar bookPage={bookPage} />
      <Router>
        <BookDetails path="/" setBookPage={this.setBookPage}/>
       <About path="about" />
      </Router>
      <Footer />
    </BookWrap>
  );
};
}