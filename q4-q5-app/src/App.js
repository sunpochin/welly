import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ConditionalRendering from './Conditional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConditionalRendering />
        <Counter />
      </header>
    </div>
  );
}

export default App;
