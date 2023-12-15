import React from 'react';

export default function Home() {
    return (
        <>
            <div className='Contenedor'>
                <h1 height={240}>Receta de Conchas</h1>

                <img height={240} className="imagen3" src="./src/assets/conchas-caseras-2000.jpg" alt="Conchas" />
                <h3>
                    500 g de mejillones
                    500 g de almejas
                    300 g de camarones o langostinos, pelados
                    1 cebolla, picada finamente
                    3 dientes de ajo, picados
                    1 pimiento rojo, picado
                    1 zanahoria, en rodajas finas
                    1 lata (400 g) de tomate triturado
                    1 taza de vino blanco
                    1 taza de caldo de pescado o marisco
                    Perejil fresco, picado
                    Aceite de oliva
                    Sal y pimienta al gusto
                </h3>
            </div>
        </>
    );
}

