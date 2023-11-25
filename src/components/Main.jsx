import styled from 'styled-components';
import nigth from './weather_assets/night.png';
import day from './weather_assets/day.png';
import clearDay from './weather_assets/weatherType/ClearDay.svg';
import clearNight from './weather_assets/weatherType/ClearNight.svg';
import cloudy from './weather_assets/weatherType/Cloudy.svg';
import fewCloudsDay from './weather_assets/weatherType/FewCloudsDay.svg';
import fewCloudsNight from './weather_assets/weatherType/FewCloudsNight.svg';
import rain from './weather_assets/weatherType/Rain.svg';
import storm from './weather_assets/weatherType/Storm.svg';


const Block = styled.div`
color:#FAFAFA;
border-radius: 5px;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 1px;
grid-row-gap: 1px;
width: 100%;
`
const DialThermometer = styled.div`
grid-area: 1 / 1 / 3 / 2;
display: flex;
align-items: center;
justify-content: center; 
`
const ImgWeather = styled.div`
grid-area: 1 / 2 / 3 / 3;
display: flex;
justify-content: end; 

`
const MinMaxTemp = styled.div`
grid-area: 2 / 1 / 3 / 3;
display: flex;
align-items: center;
justify-content: center;
`
const TempDisplay = styled.p`
font-size: 40px;
`
const MinMaxDisplay = styled.p`
font-size: 20px;
margin: 1%;
`
export default function Main({ isDay, main, wmoCode }) {

  let background = ``;
  let imgWeather = ``;

  if (isDay === 1) {
    background = day;

    if (wmoCode === 0) {
      imgWeather = clearDay;
    }
    else if (wmoCode === 1 | wmoCode === 2) {
      imgWeather = fewCloudsDay;
    }
    else if (wmoCode === 3 | wmoCode === 45 | wmoCode === 48 | wmoCode === 71 | wmoCode === 73 | wmoCode === 75 | wmoCode === 77 | wmoCode === 85 | wmoCode === 86) {
      imgWeather = cloudy;
    }
    else if (wmoCode === 80 | wmoCode === 81 | wmoCode === 82 | wmoCode | 51 | wmoCode === 53 | wmoCode === 55 | wmoCode === 56 | wmoCode === 57 | wmoCode === 61 | wmoCode === 63 | wmoCode === 65 | wmoCode === 66 | wmoCode === 67) {
      imgWeather = rain;
    }
    else if (wmoCode === 95 | wmoCode === 96 | wmoCode === 99) {
      imgWeather = storm;
    }
  }
  else if(isDay === 0) {
    background = nigth;
    
    if (wmoCode === 0) {
      imgWeather = clearNight;
    }
    else if (wmoCode === 1 | wmoCode === 2) {
      imgWeather = fewCloudsNight;
    }
    else if (wmoCode === 3 | wmoCode === 45 | wmoCode === 48 | wmoCode === 71 | wmoCode === 73 | wmoCode === 75 | wmoCode === 77 | wmoCode === 85 | wmoCode === 86) {
      imgWeather = cloudy;
    }
    else if (wmoCode === 80 | wmoCode === 81 | wmoCode === 82 | wmoCode | 51 | wmoCode === 53 | wmoCode === 55 | wmoCode === 56 | wmoCode === 57 | wmoCode === 61 | wmoCode === 63 | wmoCode === 65 | wmoCode === 66 | wmoCode === 67) {
      imgWeather = rain;
    }
    else if (wmoCode === 95 | wmoCode === 96 | wmoCode === 99) {
      imgWeather = storm;
    }    
  }

  

  return (
    <Block style={{ backgroundImage: `url(${background})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
      <DialThermometer>
        <TempDisplay>{main.temp} {main.unit}</TempDisplay>
      </DialThermometer>
      <ImgWeather>
        <img src={imgWeather} />       
      </ImgWeather>
      <MinMaxTemp>
        <MinMaxDisplay>MIN: {main.min}{main.unit}</MinMaxDisplay>
        <MinMaxDisplay>MAX: {main.max}{main.unit}</MinMaxDisplay>
      </MinMaxTemp>
    </Block>
  );
}
