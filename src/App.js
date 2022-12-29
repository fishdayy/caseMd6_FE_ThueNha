import {Route,Routes} from "react-router-dom";
import Login from "./page/login";
import {useSelector} from "react-redux";
import Register from "./page/register";
import Home from "./page/home";
import './App.css';
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Footer from "./components/Footer";
import CreatePost from "./page/afterLogin/createPost";
import {GetList} from "./page/afterLogin/getList";

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
                  <Route path={''} element={<GetList/>}></Route>
                  <Route path={'create-post'} element={<CreatePost/>}></Route>
              </Route>
              :
              <Route path="*" element={<Login/>}/>
        }
          <Route path={'/home'} element={<Home/>}/>
      </Routes>
      //   <CreatePost/>
  );
}

export default App;
