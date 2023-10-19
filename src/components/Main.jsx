import styled from 'styled-components';
import nigth from './weather_assets/night.png';
import day from './weather_assets/day.png';
import moon from './weather_assets/moon.svg';

const Block = styled.div`
color:#FAFAFA;
border-radius: 5px;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);

`
const DialThermometer = styled.div`
grid-area: 1 / 1 / 5 / 4;
display: flex;
align-items: center;
justify-content: center; 
`
const ImgWeather = styled.div`
grid-area: 1 / 4 / 3 / 6;
display: flex;
justify-content: end; 

`
const MinMaxTemp = styled.div`
grid-area: 3 / 4 / 5 / 6;
display: flex;
align-items: center;
justify-content: center;
`
const TempDisplay =styled.p`
font-size: 7vW;
` 
const MinMaxDisplay =styled.p`
font-size: 2vW;
` 
export default function Main({ isDay, main }) {

  let background = ``;

  if(isDay === 1) {
    background=day;
  }
  else {
    background=nigth;
  }

  return (
    <Block style={{ backgroundImage: `url(${background})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
      <DialThermometer>
        <TempDisplay>{main.temp} {main.unit}</TempDisplay>
      </DialThermometer>
      <ImgWeather>
        <img src={moon} />
      </ImgWeather>
      <MinMaxTemp>
        <MinMaxDisplay>MIN: {main.min}{main.unit}</MinMaxDisplay>
        <MinMaxDisplay>MAX: {main.max}{main.unit}</MinMaxDisplay>
      </MinMaxTemp>
    </Block>
  );
}
