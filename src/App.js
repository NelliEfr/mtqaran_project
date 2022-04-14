import { Route, Routes, useNavigate, useLocation, Link } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import CatalogPage from "./pages/CatalogPage";
import LecturesPage from "./pages/LecturesPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";


import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/catalog' element={<CatalogPage/>} />
        <Route path='/lectures' element={<LecturesPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/auth' element={<AuthPage/>} />
      </Routes>
    </div>
  );
}

export default App;
