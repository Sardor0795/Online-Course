import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main">
          <Nav />
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
