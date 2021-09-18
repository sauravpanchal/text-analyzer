// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import {Navbar} from './components/Navbar';
import {TextForm} from './components/TextForm';

function App() {
  // Entire thing written inside return is called JSX. -Nothing but HTML hiding behind JS.
  // <> </> only one tag can be returned. you can use JSX fragment
  return (
    <>
    <Navbar title="TextUtils" aboutText="About"/>
    <div className="container my-3">
      <TextForm heading="Enter text to analyze"/>
    </div>
    <div className="container my-3">
      <About />
    </div>
    </>
  );
}

export default App;
