import React from 'react';
import Card from '../../componentes/card/card';
import '../../componentes/card/card.css';
import igrejadascorrentes from '../../imagens/igreja-das-correntes.png';
import museupacoimperial from '../../imagens/museupacoimperial.png';
import casaaposen from '../../imagens/casa_da_aposentadoria_larger.png';
import teatrosetembro from '../../imagens/teatro_larger.png';
import forca from '../../imagens/oratorip_larger.png'; 
import casapenedo from '../../imagens/casa_do_penedo_larger.png';
import forterocheira from '../../imagens/rocheira_larger.png';
import igrejarosari from '../../imagens/catedral_larger.png';
import igrejanjos from '../../imagens/convento_larger.png'; 
import senhoradorosario from '../../imagens/nossa_senhora_do_rosario_dos_pretos_larger (1).png';
import mercado from '../../imagens/mercado_publico_larger.png';
import igrejasantacruz from '../../imagens/santa_cruz_larger.png';
import saogoncalo from '../../imagens/Igreja_de_São_Gonçalo_Garcia_2.jpg';

const CardList = () => (
  <main>
    <br />
    <br />
    <article>
      <section className="section-4 container4">
        <div className="container4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              alt={card.alt}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </section>
    </article>
  </main>
);

const cardData = [
  {
    image: igrejadascorrentes,
    alt: 'Igreja das Correntes',
    title: 'Igreja das Correntes',
    description: 'A Igreja das Correntes é um templo católico localizado na cidade histórica de Penedo, em Alagoas. Sua construção foi iniciada em 1722 e finalizada em 1757, sendo considerada uma das mais antigas igrejas do estado.',
    link: '/igrejadascorrentes',
  },
  {
    image: teatrosetembro,
    alt: 'Teatro Sete de Setembro',
    title: 'Teatro Sete de Setembro',
    description: 'O Teatro Sete de Setembro de Penedo é um marco histórico e cultural da cidade. Construído em 1892, o teatro é conhecido por sua arquitetura eclética e recebeu esse nome em homenagem à data da independência do Brasil.',
    link: '/teatrosetembro',
  },
  {
    image: museupacoimperial,
    alt: 'Museu Paço Imperial',
    title: 'Museu Paço Imperial',
    description: 'O Museu Paço Imperial de Penedo é um tesouro histórico e cultural que conta a história da cidade. Originalmente construído como residência dos governadores da província no século XIX, o edifício neoclássico foi transformado em um museu no final do século XX.',
    link: '/museupacoimperial',
  },
  {
    image: forterocheira,
    alt: 'Forte da Rocheira',
    title: 'Forte da Rocheira',
    description: 'O Forte da Rocheira é uma fortaleza histórica localizada na cidade de Penedo, Alagoas. Sua construção remonta ao século XVIII, durante o período colonial do Brasil. O forte foi erguido estrategicamente na entrada do Rio São Francisco para proteger a região e o acesso à cidade de invasões marítimas.',
    link: '/forterocheira',
  },
  {
    image: igrejarosari,
    alt: 'Catedral Nossa Senhora do Rosário',
    title: 'Catedral Nossa Senhora do Rosário',
    description: 'A Catedral Nossa Senhora do Rosário é um majestoso edifício religioso localizado na cidade de Penedo, Alagoas. Construída no século XVIII, a catedral é um símbolo de fé e devoção para a comunidade local.',
    link: '/senhoradorosario',
  },
  {
    image: forca,
    alt: 'Oratório da Forca',
    title: 'Oratório da Forca',
    description: 'O Oratório da Forca é um monumento histórico localizado em Penedo, Alagoas. Também conhecido como Cruzeiro da Forca, é uma estrutura religiosa que remonta ao período colonial do Brasil.',
    link: '/forca',
  },
  {
    image: igrejasantacruz,
    alt: 'Igreja da Santa Cruz',
    title: 'Igreja da Santa Cruz',
    description: 'A Igreja da Santa Cruz é um marco religioso localizado em Penedo, Alagoas. Sua construção remonta ao século XVII, durante o período colonial do Brasil, e é considerada uma das mais antigas igrejas da região.',
    link: '/igrejasantacruz',
  },
  {
    image: mercado,
    alt: 'Mercado Público',
    title: 'Mercado Público',
    description: 'O Mercado Público é um local tradicional e movimentado em muitas cidades ao redor do mundo. É um espaço comercial onde os produtores locais, agricultores, comerciantes e artesãos se reúnem para vender uma variedade de produtos.',
    link: '/mercado',
  },
  {
    image: saogoncalo,
    alt: 'Igreja São Gonçalo',
    title: 'Igreja São Gonçalo',
    description: 'A Igreja de São Gonçalo é um importante templo religioso localizado em Penedo, Alagoas. Dedicada a São Gonçalo do Amarante, é um marco histórico e espiritual na cidade.',
    link: '/saogoncalo',
  },
  {
    image: casapenedo,
    alt: 'Casa do Penedo',
    title: 'Casa do Penedo',
    description: 'A Casa do Penedo é uma construção peculiar localizada em Penedo, Alagoas. É um exemplo notável de arquitetura rústica e única, construída entre grandes rochas de granito, conferindo-lhe um aspecto surpreendente.',
    link: '/casapenedo',
  },
  {
    image: casaaposen,
    alt: 'Casa da Aposentadoria',
    title: 'Casa da Aposentadoria',
    description: 'A Casa da Aposentadoria Velha em Penedo, Alagoas, é uma instituição histórica. Com suas paredes repletas de memórias e histórias, essa antiga casa testemunhou a passagem de gerações e se tornou um símbolo de cuidado e respeito pelos mais velhos.',
    link: '/casaaposen',
  },
  {
    image: igrejanjos,
    alt: 'Igreja Nossa Senhora dos Anjos',
    title: 'Igreja Nossa Senhora dos Anjos',
    description: 'A Igreja Nossa Senhora dos Anjos é um marco religioso localizado em Penedo, Alagoas. Também conhecida como Igreja Matriz de Penedo, ela desempenha um papel importante na vida religiosa e cultural da região.',
    link: '/igrejaanjos',
  },
  {
    image: senhoradorosario,
    alt: 'Igreja Nossa Senhora do Rosário dos Pretos',
    title: 'Igreja Nossa Senhora do Rosário dos Pretos',
    description: 'A Igreja Nossa Senhora do Rosário dos Pretos é uma igreja histórica localizada em Penedo, Alagoas. Também conhecida como Igreja do Rosário, ela desempenha um papel significativo na história e cultura da cidade.',
    link: '/igrejarosario',
  },
];



export default CardList;
