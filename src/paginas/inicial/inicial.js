
import React from "react";
import "./inicial.css";
import inicial from "../../imagens/realidade aumentada 6.jpg";
import inicial1 from "../../imagens/igreja-das-correntes.png";



export default function iinicial(){

  const handleButtonClick = () => {
    window.location.href = "https://culturatecnopenedo-realidade-aumentada.vercel.app/"; 
  };

  return (
<> 

<main> <br></br><br></br>
<article> 
   

  <section class="section-1 container1">

  
    <div class="container1">
    
      <div class="card card-1">
        
        <div class="card-header">
        <img src={ inicial1 } alt="saogoncalo " class="card-img" />
        </div>
       
        <div class="card-body">
          <h2 class="card-titulo">Pontos Turisticos de Penedo-Al</h2>
          <p class="card-texto">
          Penedo é uma cidade histórica localizada no estado de Alagoas, no nordeste do Brasil. 
          Fundada em 1614, é uma das cidades mais antigas do país e possui um rico patrimônio 
          histórico e cultural, com belas igrejas, casarões antigos, praças e monumentos.
          </p>
        </div>
       

       
        <div class="card-footer">
          <a href="/card">Escolher</a>
        </div>
       
      </div>
      

      
      <div class="card card-2">
      
        <div class="card-header">
        <img src={ inicial } alt="saogoncalo " class="card-img" />
        </div>
       
        <div class="card-body">
          <h2 class="card-titulo">Realidade Aumentada</h2>
          <p class="card-texto">
          Realidade aumentada (RA) é uma tecnologia que permite sobrepor elementos virtuais em tempo real à 
          imagem do mundo real, capturada por meio de um dispositivo como por exemplo um smartphone.
          </p>
        </div>
       

       
        <div class="card-footer">
          <a  onClick={handleButtonClick}>Ir para RA</a>
        </div> 
      
      </div>
     


     
      
    </div>

  </section> 
  </article> 
  </main> 

  </>

   )

}
