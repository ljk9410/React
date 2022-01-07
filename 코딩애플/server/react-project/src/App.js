import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React 메인페이지</h1>
      <Link to='/detail'>
        디테일페이지로 가기
      </Link>

      <p>변경점</p>

      <Route path='/detail'>
        <h2>디테일페이지</h2>
      </Route>
    </div>
  );
}

export default App;
