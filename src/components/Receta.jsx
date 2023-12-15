import React from 'react'

export default function Home() {
    return (
        <>
            <div className='Contenedor'>
                <h1 height={240}>Receta de Hamburguesa</h1>

                <img height={240} className="imagen" src="./src/assets/descarga.jpg" alt="Hamburguesa" />
                <h3>500 g de carne picada de res
                    1 cebolla, picada
                    1 diente de ajo, picado
                    1 cucharadita de sal
                    1/2 cucharadita de pimienta negra
                    1 cucharada de aceite vegetal</h3>
            </div>

        </>
    );
}

