import FotoModelo from "../../imagens/avatar.png";
import "./barralateral.css";

export default function BarraLateral() {

    return (
        <>

    

            <div className="barraLado">

                <div className="barraLadoItem">

                    <span className= "barraLadoTitulo">SOBRE MIM</span>

                        <img
                            src={FotoModelo}
                            alt=""
                        />


                        <p>
                            Testando um conjunto de frases totalmente sem sentido.
                            Testando um conjunto de frases totalmente sem sentido.
                            Testando um conjunto de frases totalmente sem sentido.
                        </p>

                        <div className= "barraLadoItem">
                            <span className= "barraLadoTitulo">CATEGORIAS</span>

                            <ul className="barraLadoLista">

                                <li className= "barraLadoListaItem">Vida</li>
                                <li className= "barraLadoListaItem">Música</li>
                                <li className= "barraLadoListaItem">Esporte</li>
                                <li className= "barraLadoListaItem">Tecnologia</li>
                                
                            </ul>
                            
                        </div>
               
                </div>

          
            </div>

        </>
    )
}
