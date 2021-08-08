import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header.jsx"
import Main from "./Components/Main/Main.jsx"
import Footer from "./Components/Footer/Footer.jsx"

function App(props) {
  return (
    <div className="App">
      <Header/>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
