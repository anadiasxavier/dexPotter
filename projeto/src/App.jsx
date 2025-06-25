
//imports do app

import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./Rotas/Rotas";

// componente principal
function App() {
 
    return (
      <BrowserRouter>
      {/*Componente que define as rotas internas da aplicacao*/}
      <Rotas/>
      </BrowserRouter>
    )
  }
  
  export default App
  