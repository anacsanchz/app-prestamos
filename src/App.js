import React, { useState } from 'react';
import Header from './components/header'
import Formulario from './components/formulario'
import Mensaje from './components/mensaje'
import Resultado from './components/resultado'
import Spinner from './components/spinner'

function App() {

  //state cantidad
  const [cantidad, guardarCantidad] = useState(0);

  //state plazo

  const [plazo, guardarPlazo] = useState('');

  //state total

  const [total, guardarTotal] = useState(0)

  //state spinner

  const [cargando, guardarCargando] = useState(false)

  let componente;

  if (cargando) {
    componente = <Spinner />
  } else if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado
      total={total}
      plazo={plazo}
      cantidad={cantidad}
    />
  }


  return (
    <div className="App">
      <Header titulo="Cotizador de Prestamos" />

      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />

        <div className="mensajes">
          {componente}
        </div>
      </div>
    </div>
  );
}

export default App;
