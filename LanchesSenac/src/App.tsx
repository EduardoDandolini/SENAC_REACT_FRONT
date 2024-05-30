import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PaginaInicial from "./Pages/PaginaInicial/PaginaInicial";
import Autor from "./Pages/Autor/Autor";
import Cardapio from "./Pages/Cardapio/Cardapio";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PaginaFormProduto from "./Pages/PaginaFormProduto/PaginaFormProduto";
import FuncionarioListagemPagina from "./Pages/Funcionario/Funcionario"
import Shares from "./Pages/Shares/Share";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/admin" />
        <Route path="/autor" element={<Autor />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/paginaFormProduto" element={<PaginaFormProduto/>} />
        <Route path="/Share" element={<Shares/>} />
        <Route path="/funcionarios/lista" element={<FuncionarioListagemPagina/>}/>
      </Routes>
    </Router>
  );
};

export default App;
