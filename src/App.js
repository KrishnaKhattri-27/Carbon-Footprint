import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Questionnaire from './pages/Questionnaire';
import Result from './pages/Result';

function App() {
  return (
    <>
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/questionnaire' element={<Questionnaire/>}/>
            <Route path='/result' element={<Result/>}/>
          </Routes>
          <Footer/>
          </BrowserRouter>
    </>
  );
}

export default App;
