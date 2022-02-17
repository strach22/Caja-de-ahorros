export default function Calculadora() {
  const numero = () => {
    <h1>Hola</h1>;
  };
  const operacion = () => {
    <h1>Hola</h1>;
  };
  const borrar = () => {
    <h1>Hola</h1>;
  };
  const igual = () => {
    <h1>Hola</h1>;
  };

  return (
    <div className="calc">
      <div className="display">
        <input className="resultado" type="text" placeholder="0" />
      </div>

      <button type="submit" onClick={numero}>
        7
      </button>
      <button type="submit" onClick={numero}>
        8
      </button>
      <button type="submit" onClick={numero}>
        9
      </button>
      <button type="submit" onClick={operacion}>
        /
      </button>
      <button type="submit" onClick={numero}>
        4
      </button>
      <button type="submit" onClick={numero}>
        5
      </button>
      <button type="submit" onClick={numero}>
        6
      </button>
      <button type="submit" onClick={operacion}>
        x
      </button>
      <button type="submit" onClick={numero}>
        1
      </button>
      <button type="submit" onClick={numero}>
        2
      </button>
      <button type="submit" onClick={numero}>
        3
      </button>
      <button type="submit" onClick={operacion}>
        -
      </button>
      <button type="submit" onClick={borrar}>
        C
      </button>
      <button type="submit" onClick={numero}>
        0
      </button>
      <button type="submit" onClick={igual}>
        =
      </button>
      <button type="submit" onClick={operacion}>
        +
      </button>
    </div>
  );
}
