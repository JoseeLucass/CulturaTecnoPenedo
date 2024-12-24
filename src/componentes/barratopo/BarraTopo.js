import "./barratopo.css";
import {Link} from "react-router-dom";
import { FcHome } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
import { FcReading } from 'react-icons/fc';
import { FcIntegratedWebcam } from 'react-icons/fc';
import {FcUndo} from "react-icons/fc";

export default function BarraTopo() { 
    
    function voltarPaginaAnterior() {
        window.history.go(-1);
      }
    
    const handleButtonClick = () => {
        window.location.href = "https://culturatecnopenedo-realidade-aumentada.vercel.app/"; 
      };
    return (
        <>


            <div className= "topo">


            <div className="topoEsquerda"></div>


            <div className="topoCentro">
                <ul className="topoLista">

                    <Link to="/">
                    
                    <li className="topoListaItem"><p>Início</p></li>
                    </Link>

                    <Link to="/card">
                    <li className="topoListaItem"><p>Pontos Turisticos</p></li>
                    </Link>

                    <Link to="/sobre">
                    <li className="topoListaItem"><p>Instruções</p></li>
                    </Link>

                    <Link to onClick={handleButtonClick}>
                    <li className="topoListaItem"><p>Realidade Aumentada</p></li>
                    </Link>
                    
                  
                  
   
                </ul>
            </div>

            <div className="topoDireita">
                
                

                
            </div>

    


          </div>
        </>
    )
}
