import './sobre.css';

const InstrucoesRA = () => {
  return (
    <div className="instrucoes-container">
      <h1>Como Usar a Realidade Aumentada (RA)</h1>

      <p>
        Esta aplicação oferece uma experiência interativa de Realidade Aumentada com conteúdos culturais e históricos de Penedo. Siga os passos abaixo para começar:
      </p>

      <h2>1. Acesse os Marcadores Virtuais</h2>
      <p>
        Os marcadores estão disponíveis online. Clique no botão abaixo para visualizá-los:
      </p>
      <div className="botao-centro">
        <a href="/marcadores" className="botao" target="_blank" rel="noopener noreferrer">
          Ver Marcadores
        </a>
      </div>

      <h2>2. Libere a Câmera</h2>
      <p>
        Ao iniciar a experiência, permita o uso da câmera quando solicitado pelo navegador.
      </p>

      <h2>3. Aponte para o Marcador</h2>
      <p>
        Imprima ou exiba o marcador em outro dispositivo. Aponte sua câmera para visualizá-lo em RA.
      </p>

      <h2>4. Interaja com o Conteúdo</h2>
      <p>
        Explore os elementos interativos diretamente na tela do seu celular ou computador.
      </p>

      <p className="dica">
        💡 Dica: utilize em ambiente bem iluminado para melhor rastreamento.
      </p>
    </div>
  );
};

export default InstrucoesRA;
