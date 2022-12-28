import './App.css';
import Login from "./page/login";
import Register from "./page/register";
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <Search/>
        {/*<Login/>*/}
      {/*  <Register/>*/}
    </div>
  );
}

export default App;
