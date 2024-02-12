import { BrowserRouter as Router ,Route  , Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./Components/Header";

const AppRouter = () => {
  return(
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter