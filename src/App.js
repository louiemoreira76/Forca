import './App.css';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';



function App() {
  return (
    <div className="App">
      <h3>Jogo da Forca</h3>
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard />
    </div>
  );
}

export default App;
