import './App.css';
import Weather from './components/Weather';
import Transit from './components/Transit';
import styled from 'styled-components';
import Loading from './components/Loading';

const Block1 = styled.div`
background-color: blue; 
`
const Block2 = styled.div`
background-color: red; 
`

function App() {
  return (
    <div className="app-container">
      <div className="half-screen">
        <Loading />
      </div>
      <div className="half-screen">
        <Transit />
      </div>
    </div>
  );
}

export default App;
