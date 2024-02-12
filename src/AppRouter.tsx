import { BrowserRouter as Router ,Route  , Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./Components/Header";
import Video from "./pages/video/video";

const AppRouter = () => {
  return(
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/videos/:id" element={<Video />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter