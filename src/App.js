import './App.css';

const sounds = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]

const Keyboard = ({ play, handleKeyPress }) => {
  return sounds.map((sound) => {
    return <button id = {sound.id} className="drum-pad" onClick={() => play(sound.key)} onKeyDown={(e) => handleKeyPress(e)}>
      <audio className="clip" name = {sound.id} id={sound.key} src={sound.url} key={sound.id}></audio>
      {sound.key}
    </button>
  })
}

const App = () => {
  const play = (key) => {
    const audio = document.getElementById(key);
    document.getElementById('display').innerHTML=audio.getAttribute('name');
    audio.currentTime = 0;
    const playPromise = audio.play();
    if (playPromise !== null){
      playPromise.catch(() => { audio.play(); })
    }
  }
  const handleKeyPress = (e) => {
    if (document.getElementById(e.key.toUpperCase())) {
      const audio = document.getElementById(e.key.toUpperCase());
      document.getElementById('display').innerHTML=audio.getAttribute('name');
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise !== null){
        playPromise.catch(() => { audio.play(); })
      }
    }
  }
  return (
    <div className="App">
      <div id="drum-machine">
        <Keyboard play={play} handleKeyPress={handleKeyPress}/>
        <div id="display">Press a button</div>
      </div>
    </div>
  );
}

export default App;
