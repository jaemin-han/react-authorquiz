import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Hero() {
  return (<div className="row">
  {/* col-10 meaning 10 columns wide out of a possible 12 */}
  {/* offset-1 is the left by one column */}
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quizzz</h1>
      <p>Select the book written by the author shown below</p>
    </div>
  </div>);
}

// Need author & book properties
function Turn({author, books}) {
  return (<div className="row turn" style={{backgroundColor: "white"}}>
    {/* 4 columns of 12 columns  */}
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"/>
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title}/>)}
    </div>
  </div>);
}

function Book({title}) {
  return (<div className="answer">
  <h6>{title}</h6>
  </div>
  );
}


function Continue() {
  return (<div />)
}

function Footer() {
  return (<div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wiki_Wiki</a></p>
    </div>
  </div>)
}

// class AuthorQuiz extends Component {
//   render() {
//     return (
//       <div className="container-fluid">
//         <Hero />
//         <Turn />
//         <Continue />
//         <Footer />
//       </div> 
//     );
//   }
// }

function AuthorQuiz({turnData}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData}/>
      <Continue />
      <Footer />
    </div> 
  );
}

export default AuthorQuiz;
