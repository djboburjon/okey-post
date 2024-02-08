import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Title from "./pages/Как покупать/Title";
import Title2 from "./pages/Распродажи/Title2";
import Title3 from "./pages/Цены/Title3";
import Title4 from "./pages/Бонусы/Title4";
import Title5 from "./pages/Блог/Title5";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/как покупать" element={<Title/>}/>
          <Route path="/распродажи" element={<Title2/>}/>
          <Route path="/цены" element={<Title3/>}/>
          <Route path="/бонусы" element={<Title4/>}/>
          <Route path="/блог" element={<Title5/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
