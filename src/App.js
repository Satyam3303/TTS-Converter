import './App.css';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useState } from 'react';
import Spinner from './Trademark/spinner';

function App() {
  const [text, setText] = useState('');
  const { speak, voices } = useSpeechSynthesis();
  const [selectedVoice, setSelectedVoice] = useState(null);

  const handleClick = () => {
    speak({ text, voice: selectedVoice });
  }

  const handleVoiceChange = (e) => {
    const selectedVoiceName = e.target.value;
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
    setSelectedVoice(selectedVoice);
  }

  return (
    <>
      <div className='App'>
        <div>
          <h1 className='App-header'>TTS CONVERTER</h1>
          <textarea className="textAreaStyle" onChange={(e) => { setText(e.target.value) }}></textarea>
        </div>
        <div>
          <button className="buttonStyle" onClick={() => { handleClick() }}>Listen</button>
          <select className="buttonStyle" onChange={(e) => { handleVoiceChange(e) }}>
            {voices.map((voice, index) => (
              <option key={index} value={voice.name}>{voice.name}</option>
            ))}
          </select>
        </div>
        <footer className='footer'>
             <Spinner/>

         
          Made by Shivam</footer>
      </div>
    </>
  );
}

export default App;
