import React from "react";
import "./historia.css";
import Rodape from "../../componentes/rodape/Rodape";
import igrejasantacruz from "../../imagens/santa_cruz_larger.png";


export default function iigrejasantacruz(){

  return (
    <>

<header>
        
</header>


<main>
 <article>
    <section class="section-3 container3">


    <img src={igrejasantacruz} alt="igrejasantacruz" class="tamanhoimg" /> 
        <div class="action-title"> <br></br>

        

            <h2>IGREJA DA SANTA CRUZ </h2> <br></br>

            <p>A igreja possui uma arquitetura característica do estilo colonial português, com influências barrocas. Sua fachada simples, porém elegante, é marcada por detalhes ornamentais e uma cruz que se destaca no topo.
              O interior da Igreja da Santa Cruz é um espaço de serenidade e devoção. O altar principal abriga a imagem de Cristo na cruz, que dá nome à igreja. Afrescos e pinturas sacras adornam as paredes, proporcionando uma atmosfera sagrada e contemplativa.
              A igreja desempenha um papel fundamental na vida religiosa da comunidade local. É um local de encontros para celebrações litúrgicas, missas e momentos de oração. A devoção à Santa Cruz é uma parte central da fé dos fiéis, e a igreja oferece um espaço para expressar essa devoção e encontrar conforto espiritual.</p>
           
        </div> 


    </section> <br></br> <br></br> 
</article>



</main> <br></br> <br></br> <br></br> <br></br> <br></br>


<Rodape/>
    
    </>
   )

}