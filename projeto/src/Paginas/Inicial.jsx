//imports da pagina

import { Cabecalho } from "../componentes/Cabecalho";
import { Outlet } from "react-router-dom";
import { Rodape } from "../componentes/Rodape"

//funcao para o layout 
export function Inicial(){
    return(
        <> 
        <Cabecalho/>
        <Outlet/>
        <Rodape/>
        </>
    )
}