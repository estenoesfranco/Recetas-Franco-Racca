import React from 'react';

export default function Home() {
    return (
        <>
            <div className='Contenedor'>
                <h1 height={240}>Receta de Fideos Negros</h1>

                <img height={240} className="imagen2" src="./src/assets/receta-espaguetis-negros.jpg" alt="Fideos" />
                <h3>
                    200 g de fideos negros de tinta de calamar
                    2 cucharadas de aceite de oliva
                    1 cebolla, finamente picada
                    2 dientes de ajo, picados
                    300 g de calamares, limpios y cortados en anillos
                    1 lata (400 g) de tomate triturado
                    Sal y pimienta al gusto
                    Perejil fresco, picado (para decorar)
                    Queso parmesano rallado (opcional)
                </h3>
            </div>
        </>
    );
}


