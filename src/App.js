
import './App.css';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Listnews from './Components/Listnews/Listnews';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/news" element={<Listnews />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
