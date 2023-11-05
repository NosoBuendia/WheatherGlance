import './App.css';
import Weather from './components/Weather';
import Transit from './components/Transit';



function App() {
  return (
    <div className="app-container">
      <div className="half-screen">
        <Weather />
      </div>
      <div className="half-screen">
        <Transit />
      </div>
    </div>
  );
}

export default App;
