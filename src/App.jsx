import './App.css';

import Receta from "./components/Receta";
import Receta2 from "./components/Receta2";
import Receta3 from "./components/Receta3";

function App() {
  return (
    <>
  
<button className="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 GRACIAS PROFE
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Gracias por dejame hacer este trabajo</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Espero le vaya parecido correcto este codigo y que haya cumplido con sus espectativas, perdon por usar un modal queria despedirme de una manera formal con usted.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">ENTIENDO CHEEE</button>
      </div>
    </div>
  </div>
</div>


   <Receta/>
   <Receta2/>
   <Receta3/>

   

    </>
  );
}

export default App;
