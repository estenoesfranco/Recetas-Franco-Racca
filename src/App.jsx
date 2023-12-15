import './App.css';

function App() {
  return (
    <>
    <div className='Contenedor'>
      <h1 height={240}>Receta de Hamburguesa</h1>
      
      <img height={240} className="imagen" src="./src/assets/descarga.jpg" alt="Hamburguesa" />
      </div>
      <div className='Contenedor'>
      <h1 height={240}>Receta de Fideos Negros</h1>
      
      <img height={240} className="imagen2" src="./src/assets/receta-espaguetis-negros.jpg" alt="Fideos" />
      </div>
      <div className='Contenedor'>
      <h1 height={240}>Receta de Conchas</h1>
      
      <img height={240} className="imagen3" src="./src/assets/conchas-caseras-2000.jpg" alt="Conchas" />
</div>
    </>
  );
}

export default App;
