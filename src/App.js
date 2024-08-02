import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
// import MangaDetail from './components/MangaDetail';
// import ChapterDetail from './components/ChapterDetail';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/negatune-FE" element={<HomePage />} />
      {/* <Route path="/titles/:id" component={MangaDetail} />
      <Route path="/chapters/:id" component={ChapterDetail} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
