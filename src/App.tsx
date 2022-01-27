import { Route, Routes } from "react-router";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import NewsDitail from "./pages/NewsDitail";
import NewsPage from "./pages/NewsPage";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/react_redux_blog_ts' element={<NewsPage />} />
        <Route path='/news/:id' element={<NewsDitail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
