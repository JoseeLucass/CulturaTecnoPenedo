import "./areapostagem.css";
import Postagem from "../postagem/Postagem";
import fotoPost1 from "../../imagens/Equipe Desenvolvedora.jpg";


export default function Areapostagem() {


       let postagem1 ={"info": "EQUIPE DESENVOLVEDORA ",
                       "titulo": "Elmo Araujo Filho",
                       "titulo2": "José Lucas Bispo Dos Santos",
                       "foto" : fotoPost1 }

        
        
         return (
        
        <>

            <div className = "posts">

            <Postagem post={postagem1}/>

            </div>
                    
        </>
    )
}
