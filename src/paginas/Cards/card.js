
import React from "react";
import "./card.css";
import igrejadascorrentes from "../../imagens/igreja-das-correntes.png";
import museupaçoimperial from "../../imagens/museupacoimperial.png";
import casaaposen from "../../imagens/casa_da_aposentadoria_larger.png";
import teatrosetembro from "../../imagens/teatro_larger.png";
import forca from "../../imagens/oratorip_larger.png"; 
import casapenedo from "../../imagens/casa_do_penedo_larger.png";
import forterocheira from "../../imagens/rocheira_larger.png";
import igrejarosari from "../../imagens/catedral_larger.png";
import igrejanjos from "../../imagens/convento_larger.png"; 
import senhoradorosario from "../../imagens/nossa_senhora_do_rosario_dos_pretos_larger (1).png"
import mercado from"..//../imagens/mercado_publico_larger.png";
import igrejasantacruz from "../../imagens/santa_cruz_larger.png";
import saogoncalo from "../../imagens/Igreja_de_São_Gonçalo_Garcia_2.jpg";

export default function card(){

  return (
<> 

<main> <br></br><br></br>
<article> 
  

  <section class="section-4 container4">

  
    <div class="container4">
    
      <div class="card card-1">
        
        <div class="card-header">
        <img src={igrejadascorrentes} alt="igrejadascorrentes" class="card-img" /> 
        </div>
       
        <div class="card-body">
          <h2 class="card-titulo">Igreja Das Correntes</h2>
          <p class="card-texto">
          A Igreja das Correntes é um templo católico localizado na cidade histórica de Penedo, em Alagoas. 
          Sua construção foi iniciada em 1722 e finalizada em 1757, sendo considerada uma das mais antigas 
          igrejas do estado.
          </p>
        </div>
       

       
        <div class="card-footer">
          <a href="/igrejadascorrentes">Ver Mais</a>
        </div>
       
      </div>
      

      
      <div class="card card-2">
      
        <div class="card-header">
          <img src={teatrosetembro} alt="teatrosetembro" class="card-img" />
        </div>
       
        <div class="card-body">
          <h2 class="card-titulo"> O Teatro Sete de Setembro</h2>
          <p class="card-texto">
          O Teatro Sete de Setembro de Penedo é um marco histórico e cultural da cidade. Construído em 1892, 
          o teatro é conhecido por sua arquitetura eclética e recebeu esse nome em homenagem à data da independência do Brasil.
          </p>
        </div>
       

       
        <div class="card-footer">
          <a href="teatrosetembro">Ver Mais</a>
        </div> 
      
      </div>
     

  
      
      <div class="card card-3">
      
        <div class="card-header">
        <img src={museupaçoimperial} alt="Penedo2" class="card-img" />
        </div>
       
        <div class="card-body">
          <h2 class="card-titulo">Museu Paço imperial</h2>
          <p class="card-texto">
          O Museu Paço Imperial de Penedo é um tesouro histórico e cultural que conta a história da cidade. 
          Originalmente construído como residência dos governadores da província no século XIX,
          o edifício neoclássico foi transformado em um museu no final do século XX. 
      
          </p>
        </div>
       

       
        <div class="card-footer">
          <a href="/museupacoimperial">Ver Mais</a>
        </div> 
      
      </div>
      
      


      <div class="card card-4">
      
      <div class="card-header">
      <img src={forterocheira} alt="forterocheira" class="card-img" />
      </div>
     
      <div class="card-body">
        <h2 class="card-titulo">Forte da Rocheira</h2>
        <p class="card-texto">
        O Forte da Rocheira é uma fortaleza histórica localizada na cidade de Penedo, Alagoas.
        Sua construção remonta ao século XVIII, durante o período colonial do Brasil.
        O forte foi erguido estrategicamente na entrada do Rio São Francisco para proteger a região e o acesso à cidade de invasões marítimas.
        </p>
      </div>
     

     
      <div class="card-footer">
        <a href="forterocheira">Ver Mais</a>
      </div> 
    
    </div>




    <div class="card card-5">
      
      <div class="card-header">
      <img src={igrejarosari} alt="igrejarosari" class="card-img" />
      </div>
     
      <div class="card-body">
        <h2 class="card-titulo">Catedral Nossa Senhora do Rosário</h2>
        <p class="card-texto">
        A Catedral Nossa Senhora do Rosário é um majestoso edifício religioso localizado na cidade de Penedo, Alagoas. Construída no século XVIII, a catedral é um símbolo de fé e devoção para a comunidade local.
        </p>
      </div>
     

     
      <div class="card-footer">
        <a href="/senhoradorosario">Ver Mais</a>
      </div> 
    
    </div>





    <div class="card card-6">
      
      <div class="card-header">
      <img src={forca } alt="forca " class="card-img" />
      </div>
     
      <div class="card-body">
        <h2 class="card-titulo">Oratório da Forca</h2>
        <p class="card-texto">
        O Oratório da Forca é um monumento histórico localizado em Penedo, Alagoas. Também conhecido como Cruzeiro da Forca, é uma estrutura religiosa que remonta ao período colonial do Brasil.
        </p>
      </div>
     

     
      <div class="card-footer">
        <a href="/forca">Ver Mais</a>
      </div> 
    
    </div>




    <div class="card card-7">
      
      <div class="card-header">
      <img src={igrejasantacruz} alt="igrejasantacruz" class="card-img" />
      </div>
     
      <div class="card-body">
        <h2 class="card-titulo">Igreja da Santa Cruz</h2>
        <p class="card-texto">
        A Igreja da Santa Cruz é um marco religioso localizado em Penedo, Alagoas. Sua construção remonta ao século XVII, durante o período colonial do Brasil, e é considerada uma das mais antigas igrejas da região.
        </p>
      </div>
     

     
      <div class="card-footer">
        <a href="/igrejasantacruz">Ver Mais</a>
      </div> 
    
    </div>



    <div class="card card-8">
      
      <div class="card-header">
      <img src={mercado} alt="mercado" class="card-img" />
      </div>
     
      <div class="card-body">
        <h2 class="card-titulo">Mercado Público </h2>
        <p class="card-texto">
        O Mercado Público é um local tradicional e movimentado em muitas cidades ao redor do mundo. É um espaço comercial onde os produtores locais, agricultores, comerciantes e artesãos se reúnem para vender uma variedade de produtos.
        </p>
      </div>
     

     
      <div class="card-footer">
        <a href="/mercado">Ver Mais</a>
      </div> 
    
    </div>


      
    <div class="card card-9">
      
      <div class="card-header">
      <img src={saogoncalo} alt="saogoncaloss" class="card-img" />
      </div>
     
      <div class="card-body">
        <h2 class="card-titulo">Igreja São Gonçalo</h2>
        <p class="card-texto">
         A Igreja de São Gonçalo é um importante templo religioso localizado em Penedo, Alagoas. Dedicada a São Gonçalo do Amarante, é um marco histórico e espiritual na cidade.
        </p>
      </div>
     

     
      <div class="card-footer">
        <a href="/saogoncalo">Ver Mais</a>
      </div> 
    
    </div>





    <div class="card card-10">
      
      <div class="card-header">
      <img src={casapenedo } alt="casapenedo " class="card-img" />
      </div>
     
      <div class="card-body">
        <h2 class="card-titulo">Casa Do Penedo</h2>
        <p class="card-texto">
        A Casa do Penedo, também conhecida como Casa de Pedra, é uma construção peculiar localizada em Fafe, Portugal. É um exemplo notável de arquitetura rústica e única, construída entre quatro grandes rochas de granito, conferindo-lhe um aspecto surpreendente.
        </p>
      </div>
     

     
      <div class="card-footer">
        <a href="/casapenedo">Ver Mais</a>
      </div> 
    
    </div>


    <div class="card card-11">
      
      <div class="card-header">
      <img src={casaaposen } alt="casaaposen " class="card-img" />
      </div>
     
      <div class="card-body">
        <h2 class="card-titulo">Casa Da Aposentadoria </h2>
        <p class="card-texto">
        
          A Casa da Aposentadoria Velha em Penedo, Alagoas, é uma instituição histórica. Com suas paredes repletas de memórias e histórias, essa antiga casa testemunhou a passagem de gerações e se tornou um símbolo de cuidado e respeito pelos mais velhos.
        </p>
      </div>
     

     
      <div class="card-footer">
        <a href="/casaaposen">Ver Mais</a>
      </div> 
    
    </div>



    <div class="card card-12">
      
      <div class="card-header">
      <img src={igrejanjos} alt="igrejanjos" class="card-img" />
      </div>
     
      <div class="card-body">
        <h2 class="card-titulo">Igreja Nossa Senhora dos Anjos</h2>
        <p class="card-texto">
        A Igreja Nossa Senhora dos Anjos é um marco religioso localizado em Penedo, Alagoas. Também conhecida como Igreja Matriz de Penedo, ela desempenha um papel importante na vida religiosa e cultural da região.
        </p>
      </div>
     

     
      <div class="card-footer">
        <a href="/igrejaanjos">Ver Mais</a>
      </div> 
    
    </div>

    <div class="card card-12">
      
      <div class="card-header">
      <img src={senhoradorosario} alt="senhoradorosario" class="card-img" />
      </div>
     
      <div class="card-body">
        <h2 class="card-titulo">Igreja Nossa Senhora Do Rosário Dos Pretos</h2>
        <p class="card-texto"> 
        A Igreja Nossa Senhora do Rosário dos Pretos é uma igreja histórica localizada em Penedo, Alagoas. Também conhecida como Igreja do Rosário, ela desempenha um papel significativo na história e cultura da cidade.
        </p>
      </div>
     

     
      <div class="card-footer">
        <a href="/igrejarosario">Ver Mais</a>
      </div> 
    
    </div>

    </div>

  </section> 
  </article> 
  </main> 



  </>

   )

}
