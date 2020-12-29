import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={{margin: '10px 10px'}}>Tall & Tapered</h2>
        <p style={{margin: '10px 10px', fontSize: '.9rem'}}>
        Lifestyle Brand For Guys 6'3"+ <br/> Tall Clothing Line Coming Soon...
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/tallandtapered/"
          target="_blank"
          rel="noopener noreferrer"
          style={{margin: '10px 10px', fontSize: '.9rem'}}
        >
          Check Us Out On Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
