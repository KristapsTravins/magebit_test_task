import './css/App.css'
import Header from './components/Header';
import MainBlock from './components/MainBlock';

function App() {
  return (
    <div className="App">
      <div className="left_sect">
        <Header  />
        <MainBlock  />
      </div>
      <div className="right_sect"></div>
    </div>
  );
}

export default App;
