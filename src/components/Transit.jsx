import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Loading from './Loading';
import MainMap from './MainMap';
import TransitSelect from './TransitSelect';

const Header = styled.div`
  color:#FAFAFA;
  background-color: #22222F;
  text-align: center;
  min-height:15%;
  border-radius: 5px;
`;

export default function NewTransit() {
  const [TransitData, setTransitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [DefaultRoute, setDefaultRoute] = useState("1");

  useEffect(() => {
    const fetchData = (id) => {
      const apiUrl = `https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${id}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;
      Axios.get(apiUrl)
        .then((response) => {
          const apiData = response.data;
          setTransitData(apiData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error al cargar los datos de la API:', error);
          
        });
    };

    const interval = setInterval(() => {
      fetchData(DefaultRoute);
    }, 31000);

    fetchData(DefaultRoute);

    return () => clearInterval(interval);
  }, [DefaultRoute]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header>
            <p>TRANSPORTE.</p>
          </Header>
          <TransitSelect DefaultRoute={DefaultRoute} setDefaultRoute={setDefaultRoute} />
          <MainMap DefaultRoute={DefaultRoute} TransitData={TransitData} />
        </div>
      )}
    </div>
  );
}
