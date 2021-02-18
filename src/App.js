import react from 'react'
import logo from './logo.svg';
import './App.css';
import './Responsive.css';
// import Home from './Home';
import Headerall from './Header-all';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <Header />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
