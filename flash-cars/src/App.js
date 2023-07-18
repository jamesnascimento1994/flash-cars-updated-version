import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Flash Cars</h1>
      <button className="start-button">Start Game</button>
      <div className="score">
        <aside>Score Right: <span className="score-right">0</span>/10</aside>
        <aside>Score Wrong: <span className="score-wrong">0</span>/5</aside>
      </div>
    </div>
  );
}

export default App;
