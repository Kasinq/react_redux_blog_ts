import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import { Auth } from "./pages/Auth";
import { Friends } from "./pages/Friends";
import NewsDitail from "./pages/NewsDitail";
import NewsPage from "./pages/NewsPage";
import { User } from "./pages/User";
import { check, fetchAuthUser } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useDispatch()

  useEffect(() => { 
    check().then((data:any) => {
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
