import "./App.css";
import AddRequest from "./components/AddRequest";
import EditRequest from "./components/EditRequest";
import ListRequests from "./components/ListRequests";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Genios del 2000</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarsolicitud">Agregar Usuario</a>
              </li>    
              <li className="nav-item">
                <a className="nav-link" href="/">Mi perfil</a>
              </li>                     
              <li className="nav-item">
                <a className="nav-link" href="/">Cerrar sesion</a>
              </li> 
            </ul>           
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListRequests />}></Route>
          <Route path="/agregarsolicitud" element={<AddRequest />}></Route>
          <Route path="/editarsolicitud/:id" element={<EditRequest />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
