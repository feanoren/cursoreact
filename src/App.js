import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setlinea1] = useState('');
  const [linea2, setlinea2] = useState('');
  const [imagen, setimagen] = useState('');

  const onChangeLinea1 = function(evento) {
    setlinea1(evento.target.value)
  }

  const onChangeLinea2 = function(evento) {
    setlinea2(evento.target.value)
  }

  const onChangeImagen = function(evento) {
    setimagen(evento.target.value)
  }

  const onClickExportar = function(evento) {
    html2canvas(document.querySelector("#planet")).then(canvas => {
      var img = canvas.toDataURL('image/png');

      var link = document.createElement('a');
      link.download = "planeta.png";
      link.href = img;
      link.click();
  });    
  }



  return (
  

    <div className="App">
  
      <select onChange={onChangeImagen} >
        <option value='merc'>Mercurio</option>
        <option value='venu'>Venus</option>
        <option value='mart'>Marte</option>
        <option value='jupi'>Júpiter</option>
        <option value='satu'>Saturno</option>
        <option value='uran'>Urano</option>
        <option value='nept'>Neptuno</option>
        <option value='plut'>Plutón</option>
      </select> <br />

      <input onChange={onChangeLinea1} type="text" placeholder="Planeta"/> <br />
      <input onChange={onChangeLinea2} type="text" placeholder="Signo zodiacal"/> <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className="planet" id="planet">
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".png"}/>
      </div>

    </div>
  );
}

export default App;
