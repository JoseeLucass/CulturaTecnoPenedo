
import Rodape from "./componentes/rodape/Rodape";
import Inicial from "./paginas/inicial/inicial";
import Barratopo from "./componentes/barratopo/barratopo";
import Sobre from "./paginas/sobre/Sobre";
import Card from "./paginas/pontosturisticos/card";
import Igrejadascorrentes from "./paginas/historia/igrejadascorrentes";
import Teatrosetembro from "./paginas/historia/teatrosetembro";
import Forterocheira from "./paginas/historia/forterocheira";
import Museupacoimperial from "./paginas/historia/museupacoimperial";
import Senhoradorosario from "./paginas/historia/senhoradorosario";
import Forca from "./paginas/historia/forca";
import Igrejasantacruz from "./paginas/historia/igrejasantacruz";
import Mercado from "./paginas/historia/mercado";
import Saogoncalo from "./paginas/historia/saogoncalo";
import Casapenedo from "./paginas/historia/casapenedo";
import Casaaposen from "./paginas/historia/casaaposen";
import Igrejaanjos from "./paginas/historia/igrejaanjos"
import Igrejarosario from "./paginas/historia/igrejarosari"; 
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"






export default function App(){

  return (
    <>

        <Router>

        <Barratopo/>
        <Rodape/>
        
        

        <Routes>

          
        <Route exact path="/" element={<Inicial />} />
        <Route exact path="/sobre" element={<Sobre/>} />
        <Route exact path="/card" element={<Card />} />
     
        <Route exact path="/igrejadascorrentes" element={<Igrejadascorrentes />} />
        <Route exact path="/museupacoimperial" element={<Museupacoimperial />} />
        <Route exact path= "/teatrosetembro" element={< Teatrosetembro/>} />
        <Route exact path="/forterocheira" element= {<Forterocheira/>} />
        <Route exact path="/senhoradorosario" element= {<Senhoradorosario/>}/>
        <Route exact path="/forca" element= {<Forca/>}/>
        <Route exact path="/igrejasantacruz" element= {<Igrejasantacruz/>}/>
        <Route exact path= "/mercado" element= {<Mercado/>} />
        <Route exact path= "/saogoncalo" element= {<Saogoncalo/>} />
        <Route exact path="/casapenedo" element= {<Casapenedo/>}/>
        <Route exact path= "/casaaposen" element= {<Casaaposen/>}/>
        <Route exact path="/igrejaanjos" element= {<Igrejaanjos/>} />
        <Route exact path="/igrejarosario" element= {<Igrejarosario/>} />

        

        </Routes>
        </Router>
    </>

   )
}
