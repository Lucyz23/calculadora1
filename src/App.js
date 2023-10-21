import React, { useState } from "react";
import "./style.css";

function App() {
  const [primeiroValor, setPrimeiroValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [resultado, setResultado] = useState(0);

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  const limpar = () => {
    setPrimeiroValor(0);
    setSegundoValor(0);
    setResultado(0);
  };

  return (
    <main>
      <h1>Calculadora</h1>
      <div className="calculator">
        <div className="screen">
          <input className="input" onChange={capturandoPrimeiroValor} />
          <input className="input" onChange={capturandoSegundoValor} />
        </div>
        <div className="buttons">
          <button className="button" onClick={soma}>
            +
          </button>
          <button className="button" onClick={subtracao}>
            -
          </button>
          <button className="button" onClick={multiplicacao}>
            *
          </button>
          <button className="button" onClick={divisao}>
            /
          </button>
          <button className="clear-button" onClick={limpar}>
            Limpar
          </button>
        </div>
      </div>
      <h2>Resultado: {resultado}</h2>
    </main>
  );
}

export default App;
