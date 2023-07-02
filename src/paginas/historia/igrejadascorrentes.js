import React from "react";
import "./historia.css";
import Rodape from "../../componentes/rodape/Rodape";
import igrejadascorrentes from "../../imagens/igreja-das-correntes.png";


export default function higrejadascorrentes(){

  return (
    <>

<header>
        
</header>


<main>
 <article>
    <section class="section-3 container3">


    <img src={igrejadascorrentes} alt="igrejadascorrentes" class="tamanhoimg" /> 
        <div class="action-title"> <br></br>

        

            <h2>IGREJA DAS CORRENTES </h2> <br></br>

            <p>A Igreja das Correntes de Penedo, localizada em Alagoas, Brasil, é uma construção histórica 
                que remonta ao século XVII. A igreja recebeu esse nome porque as correntes utilizadas pelos 
                escravos eram mantidas em seu pátio durante o período colonial. Ela foi construída pelos 
                jesuítas e apresenta características do estilo barroco. Durante muitos anos, a igreja foi 
                um importante centro religioso da região, tendo sido palco de importantes celebrações e 
                eventos. Hoje em dia, a igreja é um patrimônio cultural e histórico do estado de Alagoas 
                e recebe muitos visitantes que buscam conhecer a história e a arquitetura da região.</p>
           
        </div> 


    </section> <br></br> <br></br> 
</article>



</main> <br></br> <br></br> <br></br> <br></br> <br></br>


<Rodape/>
    
    </>
   )

}