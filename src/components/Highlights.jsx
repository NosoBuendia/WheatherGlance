import styled from 'styled-components';

const Block = styled.div`
color:#FAFAFA;
min-height: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 8px;
grid-row-gap: 8px;
`
const Div1 = styled.div`
 grid-area: 1 / 1 / 2 / 2;
 text-align: center;  
 background-color: #22222F; 
 border-radius: 5px;
` 
const Div2 = styled.div`
 grid-area: 1 / 2 / 2 / 3;
 text-align: center; 
 background-color: #22222F; 
 border-radius: 5px;
` 
const Div3 = styled.div`
 grid-area: 1 / 3 / 2 / 4; 
 text-align: center;
 background-color: #22222F; 
 border-radius: 5px;
` 
const Div4 = styled.div`
 grid-area: 2 / 1 / 3 / 2;
 text-align:center;
 background-color: #22222F; 
 border-radius: 5px;
` 
const Div5 = styled.div`
 grid-area: 2 / 2 / 3 / 3;
 text-align: center;
 background-color: #22222F; 
 border-radius: 5px;
` 
const Div6 = styled.div`
 grid-area: 2 / 3 / 3 / 4;
 display: flex;
 align-items: center;
 justify-content: center; 
 background-color: #22222F; 
 border-radius: 5px;
` 
export default function Highlights({uvIndex, wind, sunriseTime, sunsetTime, humidity, visibility}) {
    return (
        <Block>
            <Div1>
                <p>UV INDEX</p>

                <p>{uvIndex}</p>
            </Div1>

            <Div2>
                <p>WIND STATUS</p>
                <p>{wind} km/h</p>
            </Div2>

            <Div3>
                <p>SUNRISE & SUNSET</p>
                <p>{sunriseTime} a.m.</p>
                <p>{sunsetTime} p.m.</p>
            </Div3>

            <Div4>
                <p>HUMIDITY</p>
                <p>{humidity} %</p>
            </Div4>

            <Div5>
                <p>VISIBILITY</p>
                <p>{visibility} m.</p>
            </Div5>

            <Div6>
                <p>AIR QUALITY</p>
            </Div6>
        </Block>
    );
}
