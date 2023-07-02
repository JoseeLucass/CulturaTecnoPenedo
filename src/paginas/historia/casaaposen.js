import React from "react";
import "./historia.css";
import Rodape from "../../componentes/rodape/Rodape";

import casaaposen from "../../imagens/casa_da_aposentadoria_larger.png";

export default function ccasaaposen(){
    function voltarPaginaAnterior() {
        window.history.go(-1);
      }
  return (
    <>

<header>
        
</header>


<main>
 <article>
    <section class="section-3 container3">


    <img src={casaaposen} alt="casaaposen" class="tamanhoimg" /> 
        <div class="action-title"> <br></br>

        

            <h2>CASA DA APOSENTADORIA </h2> <br></br>

            <p>A Casa da Aposentadoria Velha, com sua arquitetura encantadora e detalhes históricos preservados, tornou-se um ponto de referência na comunidade de Penedo. Ao longo dos anos, ela foi abençoada com histórias de superação, amizades inesperadas e momentos de gratidão compartilhados entre os residentes e suas famílias.</p>
           
        </div> 


    </section> <br></br> <br></br> 
</article>



</main> <br></br> <br></br> <br></br> <br></br> <br></br>

<button onClick={voltarPaginaAnterior}>Voltar</button>

<Rodape/>
    
    </>
   )

}