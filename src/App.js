import {Route,Routes} from "react-router-dom";
import Login from "./page/login";
import {useSelector} from "react-redux";
import Register from "./page/register";
import Home from "./page/home";
import './App.css';
import Navbar from "./components/NavBar";

function App() {
  let dataUser = useSelector(state => {
    return state.user.userNow
  })
  return (
      <Routes>
        <Route path={'/'} element={<Register/>}></Route>
        <Route path={'/login'} element={<Login/>}></Route>
        {
          dataUser !=null ?
              <Route path={'/home'} element={<Home/>}>
              </Route>
              :
              <Route path="*" element={<Login/>}/>
        }
      </Routes>
  );
}

export default App;

