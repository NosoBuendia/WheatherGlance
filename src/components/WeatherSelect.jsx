import styled from 'styled-components';

const Block = styled.div`
color:#FAFAFA;
background-color: #22222F;
display: flex;
align-items: center;
justify-content: center;
padding: 1%;
border-radius: 5px;
`

const dataLocations = [
  {
    "location_name": "Cordoba",
    "location_latitude": "-31.4135",
    "location_longitude": "-64.18105"
  },
  {
    "location_name": "Buenos Aires",
    "location_latitude": "-34.61315",
    "location_longitude": "-58.37723"
  },
  {
    "location_name": "New York",
    "location_latitude": "40.71427",
    "location_longitude": "-74.00597"
  },
  {
    "location_name": "Tokyo",
    "location_latitude": "35.6895",
    "location_longitude": "139.69171"
  },
  {
    "location_name": "London",
    "location_latitude": "51.50853",
    "location_longitude": "-0.12574"
  },
  {
    "location_name": "Sydney",
    "location_latitude": "-33.86785",
    "location_longitude": "151.20732"
  },
  {
    "location_name": "Ciudad de Mexico",
    "location_latitude": "19.42847",
    "location_longitude": "-99.12766"
  },
  {
    "location_name": "Moscow",
    "location_latitude": "55.75222",
    "location_longitude": "37.61556"
  },
  {
    "location_name": "Nairobi",
    "location_latitude": "-1.28333",
    "location_longitude": "36.81667"
  },
  {
    "location_name": "Singāpur",
    "location_latitude": "17.46982",
    "location_longitude": "78.12574"
  } 
];

export default function WeatherSelect({defaultLocation, setDefaultLocation}) {
  
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setDefaultLocation(selectedValue);
  };

  return (
    <Block>
     <label>Elija una localidad: </label> 
      <select value={defaultLocation} onChange={handleSelectChange}>
        <option value="" disabled >Seleccione una opción</option>     
        {dataLocations.map((item, index) => (
          <option key={index} value={[dataLocations[index]?.location_latitude, dataLocations[index]?.location_longitude]}>{dataLocations[index].location_name}</option>
        ))}
      </select>
    </Block>
  );
};
