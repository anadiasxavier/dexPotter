// Estrutura basica para os componentes, O nome da função tem que ser o mesmo do arquivo

//Imports do componente
import estilos from './Cabecalho.module.css';


//No header foi utilizado um h1
export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
            <h1>Ana Potter</h1>
        </header>
    )
}