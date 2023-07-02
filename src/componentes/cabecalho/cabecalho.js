import "./cabecalho.css";
import FotoFundo from "../../imagens/background3.png";
import "./cabecalho.css";

export default function cabecalho() {

    return (
            
        <div className= "cabecalho">

            <div className="cabecalhoTitulo">
                
                <span className= "cabecalhoTituloCima"> Programação II</span>
                <span className= "cabecalhoTituloBaixo"> Site</span>

                <img
                    className="cabecalhoImg"
                    src={FotoFundo}
                    alt="" 
                />


             </div>

        </div>

    
    )
}
