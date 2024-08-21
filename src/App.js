import logo from './logo.svg';
import './App.css';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p>Chatbot con AI
        </p>
        <a
          className="App-link"
          href="https://github.com/feligarcia"
          target="_blank"
          rel="noopener noreferrer"
        >
         Por JF Garcia
        </a>
      </header>
      <Chat />
    </div>
  );
}

export default App;
