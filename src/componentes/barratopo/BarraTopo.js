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
        window.location.href = "https://culturatecnopenedo-realidade-aumentada.vercel.app/"; // Definindo a URL para redirecionar o usuário
      };
    return (
        <>


            <div className= "topo">


            <div className="topoEsquerda"></div>


            <div className="topoCentro">
                <ul className="topoLista">

                    <Link to="/">
                    
                    <li className="topoListaItem"><FcHome/></li>
                    </Link>

                    <Link to="/card">
                    <li className="topoListaItem"><FcReading/></li>
                    </Link>

                    <Link to="/sobre">
                    <li className="topoListaItem"><FcAbout/></li>
                    </Link>

                    <Link to onClick={handleButtonClick}>
                    <li className="topoListaItem"><FcIntegratedWebcam/></li>
                    </Link>
                    
                    <Link to="/">
                   <li className="topoListaItem" onClick={voltarPaginaAnterior}>
                   <FcUndo/>
                   </li>
                   </Link>
                  
                    
                </ul>
            </div>

            <div className="topoDireita">
                
                

                
            </div>

    


          </div>
        </>
    )
}
