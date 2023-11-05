import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Main from './Main';
import Today from './Today';
import Highlights from './Highlights';
import Loading from './Loading';
import Axios from 'axios';

const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    border-radius: 5px;
    
`

export default function Weather() {

    const [main, setMain] = useState({});
    const [isDay, setIsDay] = useState(0);
    const [uvIndex, setUvIndex] = useState('');
    const [wind, setWind] = useState('');
    const [sunriseTime, setSunriseTime] = useState('');
    const [sunsetTime, setSunsetTime] = useState('');
    const [humidity, setHumidity] = useState('');
    const [visibility, seVisibility] = useState('');
    const [apparentTemp, setApparentTemp] = useState('');
    const [wmoCode, setWmoCode ] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Axios.get('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,weathercode,windspeed_10m,winddirection_10m&hourly=temperature_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1')
            .then((response) => {
                const apiData = response.data;
                setMain({
                    temp: apiData?.current?.temperature_2m,
                    unit: apiData?.current_units?.temperature_2m,
                    min: apiData?.daily?.temperature_2m_min,
                    max: apiData?.daily?.temperature_2m_max,
                });
                setIsDay(apiData?.current?.is_day);
                setUvIndex(apiData?.daily?.uv_index_max);
                setWind(apiData?.current?.windspeed_10m);
                setSunriseTime(apiData?.daily?.sunrise[0]?.slice(11, 16));
                setSunsetTime(apiData?.daily?.sunset[0]?.slice(11, 16));
                setHumidity(apiData?.current?.relativehumidity_2m);
                seVisibility(apiData?.hourly?.visibility[apiData?.hourly?.time?.indexOf(apiData?.current?.time?.slice(0, 13) + `:00`)]);
                setApparentTemp(apiData?.current?.apparent_temperature);
                setWmoCode(apiData?.current?.weathercode);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error al cargar los datos de la API:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <Block>
                    <Main main={main} isDay={isDay} wmoCode={wmoCode} />                                                       
                    <Highlights
                        apparentTemp={apparentTemp}
                        uvIndex={uvIndex}
                        wind={wind}
                        sunriseTime={sunriseTime}
                        sunsetTime={sunsetTime}
                        humidity={humidity}
                        visibility={visibility}
                    />
                </Block>
            )}
        </div>
    );
}























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































