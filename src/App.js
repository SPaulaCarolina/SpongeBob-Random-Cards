import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [topTitle, setTopTitle] = useState('');
  const [bottomTitle, setBottomTitle] = useState('');
  const [background, setBackground] = useState('');
  const [image, setImage] = useState('');

  const onChangeTop = function (event) {
    setTopTitle(event.target.value)
  }

  const onChangeBottom = function (event) {
    setBottomTitle(event.target.value)
  }

  const onChangeImage = function (event) {
    setImage(event.target.value)
  }

  const onChangeBackground = event => {
    setBackground(event.target.value)
  }

  const exportImg = () => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      document.body.appendChild(canvas)
  });
  }

  return (
    <div className="App">
      <div className='selector'>
        <select className='input-select' onChange={onChangeImage}>
          <option value='bob'>Bob Esponja</option>
          <option value='patricio'>Patricio Estrella</option>
          <option value='calamardo'>Calamardo</option>
          <option value='cangrejo'>Don Cangrejo</option>
          <option value='arenita'>Arenita</option>
          <option value='plancton'>Plancton</option>
        </select>
        <select className='input-select' onChange={onChangeBackground}>
          <option value='background1'>Fondo 1</option>
          <option value='background2'>Fondo 2</option>
          <option value='background3'>Fondo 3</option>
          <option value='background4'>Fondo 4</option>
        </select>
        
        <input className='input' onChange={onChangeTop} type='text' placeholder='Top Title' />
        <input className='input' onChange={onChangeBottom} type='text' placeholder='Bottom Title' />
        <input className='input' onChange={onChangeBackground} type='text' placeholder='Background' />
        <button className='input-button' onClick={exportImg}>Exportar</button>
      </div>
      <div className={`generator ${background}`} id="meme">
        <span className='style1'>{topTitle}</span>
        <span className=''>{bottomTitle}</span>
        <img src={"/assets/images/"+ image +".png"} alt=''  className='character'/>
      </div>
    </div>
  );
}

export default App;
