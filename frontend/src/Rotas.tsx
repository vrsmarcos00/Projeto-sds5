import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
