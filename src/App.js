
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header';
import Home from './pages/Home'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route path="/" exact component={Home} />
    </div>
    </Router>
  );
}

export default App;
