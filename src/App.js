import './App.css';
import Weather from './components/Weather';
import Transit from './components/Transit';
import Loading from './components/Loading';



function App() {
  return (
    <div className="app-container">
      <div className="half-screen">
        <Weather />
      </div>
      <div className="half-screen">
        <Loading />
      </div>
    </div>
  );
}

export default App;
