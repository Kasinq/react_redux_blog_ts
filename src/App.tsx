import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Route, Routes } from "react-router";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import { Auth } from "./pages/Auth";
import { Friends } from "./pages/Friends";
import NewsDitail from "./pages/NewsDitail";
import NewsPage from "./pages/NewsPage";
import { User } from "./pages/User";
import { check, fetchAuthUser } from "./store/reducers/ActionCreators";
import queryString from 'query-string'

function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  const {user}:any = queryString.parse(location.search);  

  useEffect(() => {
    if (user) {
      localStorage.setItem('token', user)
    }
    check().then((data: any) => {
      console.log(data)
      dispatch(fetchAuthUser(data))
    })
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/react_redux_blog_ts' element={<NewsPage />} />
        <Route path='/react_redux_blog_ts/:title' element={<NewsPage />} />
        <Route path='/news/:id' element={<NewsDitail />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/friends' element={<Friends />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
