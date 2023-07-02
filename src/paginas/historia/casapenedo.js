import React from "react";
import "./historia.css";
import Rodape from "../../componentes/rodape/Rodape";
import casapenedo from "../../imagens/casa_do_penedo_larger.png";

export default function ccasapenedo(){

  return (
    <>

<header>
        
</header>


<main>
 <article>
    <section class="section-3 container3">


    <img src={casapenedo} alt="casapenedo" class="tamanhoimg" /> 
        <div class="action-title"> <br></br>

        

            <h2>CASA DO PENEDO </h2> <br></br>

            <p>A Casa do Penedo foi projetada pelo arquiteto português Raul Lino e concluída em 1974. Seu propósito original era servir como refúgio de férias, embora atualmente seja uma atração turística popular.
               A estrutura da casa é inteiramente feita de pedra, incluindo suas paredes, telhado e até mesmo os móveis internos. As rochas naturais foram integradas à construção, formando parte das divisões da casa, como sala de estar, quartos e cozinha. A casa também possui pequenas janelas e uma porta de aço para garantir a segurança e privacidade dos visitantes.</p>
           
        </div> 


    </section> <br></br> <br></br> 
</article>



</main> <br></br> <br></br> <br></br> <br></br> <br></br>


<Rodape/>
    
    </>
   )

}