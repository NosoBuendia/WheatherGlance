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

const dataRoutes = [
  {
    "route_id": "1",
    "rout_short_name": "7A",
    "destination": "7A / Toma Nueva"
  },
  {
    "route_id": "2",
    "rout_short_name": "7A",
    "destination": "7A / Barrio Policial"
  },
  {
    "route_id": "7",
    "rout_short_name": "42A",
    "destination": "42A / PARANÁ (Casa de Gobierno)"
  },
  {
    "route_id": "8",
    "rout_short_name": "42A",
    "destination": "42A / ORO VERDE (Inta)"
  },
  {
    "route_id": "11",
    "rout_short_name": "107A",
    "destination": "107A / a Cdad. Universitaria"
  },
  {
    "route_id": "12",
    "rout_short_name": "107A",
    "destination": "107A / a Eva Peron"
  },
  {
    "route_id": "13",
    "rout_short_name": "276A",
    "destination": "276A / a Carme de Areco"
  },
  {
    "route_id": "14",
    "rout_short_name": "276A",
    "destination": "276A / a Lujan"
  },
  {
    "route_id": "17",
    "rout_short_name": "276F",
    "destination": "276F / a Partido de las Palmas"
  },
  {
    "route_id": "18",
    "rout_short_name": "276F",
    "destination": "276F / a Lujan"
  },
  {
    "route_id": "19",
    "rout_short_name": "276C",
    "destination": "276C / a Cementerio"
  },
  {
    "route_id": "20",
    "rout_short_name": "276C",
    "destination": "276C / a Pilar"
  },
  {
    "route_id": "21",
    "rout_short_name": "108A",
    "destination": "108A / a Liniers"
  },
  {
    "route_id": "22",
    "rout_short_name": "108A",
    "destination": "108A / a Retiro"
  },
  {
    "route_id": "25",
    "rout_short_name": "276H",
    "destination": "276H / a Entrada El Cazador"
  },
  {
    "route_id": "31",
    "rout_short_name": "10A",
    "destination": "10A / PARANÁ (Barrio Mercantil)"
  },
  {
    "route_id": "32",
    "rout_short_name": "10A",
    "destination": "10A / SAN BENITO"
  },
  {
    "route_id": "33",
    "rout_short_name": "580A",
    "destination": "580A / B° AATRA III"
  },
  {
    "route_id": "34",
    "rout_short_name": "580A",
    "destination": "580A / B° ANACLETO MEDINA"
  },
  {
    "route_id": "35",
    "rout_short_name": "17A",
    "destination": "17A / COLEGIO DON BOSCO"
  },
  {
    "route_id": "36",
    "rout_short_name": "17A",
    "destination": "17A / DIVINA PROVIDENCIA"
  },
  {
    "route_id": "38",
    "rout_short_name": "228FA",
    "destination": "228FA / AEROPUERTO"
  },
  {
    "route_id": "39",
    "rout_short_name": "9A",
    "destination": "9A / CASA DE GOBIERNO POR ALMAFUERTE"
  },
  {
    "route_id": "40",
    "rout_short_name": "9A",
    "destination": "9A / AEROPUERTO"
  },
  {
    "route_id": "41",
    "rout_short_name": "9B",
    "destination": "9B / B° HERNANDARIAS"
  },
  {
    "route_id": "42",
    "rout_short_name": "9B",
    "destination": "9B / B° P. MAYOR"
  },
  {
    "route_id": "43",
    "rout_short_name": "371A",
    "destination": "371A / Bajada Grande"
  },
  {
    "route_id": "44",
    "rout_short_name": "371A",
    "destination": "371A / Club Belgrano"
  },
  {
    "route_id": "49",
    "rout_short_name": "22A",
    "destination": "22A / PARANÁ (Casa de Gobierno)"
  },
  {
    "route_id": "50",
    "rout_short_name": "22A",
    "destination": "22A / A - a Retiro"
  },
  {
    "route_id": "51",
    "rout_short_name": "371D",
    "destination": "371D / a Est. TORCUATO"
  },
  {
    "route_id": "52",
    "rout_short_name": "371D",
    "destination": "371D / a VIRREyES ACASSUSO"
  },
  {
    "route_id": "57",
    "rout_short_name": "278A",
    "destination": "278A / Ramal A - IDA"
  },
  {
    "route_id": "58",
    "rout_short_name": "278A",
    "destination": "278A / Ramal A - VUELTA"
  },
  {
    "route_id": "60",
    "rout_short_name": "281L",
    "destination": "281L / Ramal L - VUELTA"
  },
  {
    "route_id": "61",
    "rout_short_name": "585A",
    "destination": "585A / a ROMERO"
  },
  {
    "route_id": "62",
    "rout_short_name": "585A",
    "destination": "585A / a Retiro"
  },
  {
    "route_id": "63",
    "rout_short_name": "585B",
    "destination": "585B / a ROMERO"
  },
  {
    "route_id": "65",
    "rout_short_name": "71A",
    "destination": "71A / a V. Adelina x C. Larralde y Maipu"
  },
  {
    "route_id": "66",
    "rout_short_name": "71A",
    "destination": "71A / a Pza. Moreno"
  }
];

export default function TransitSelect({ DefaultRoute, setDefaultRoute }) {

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setDefaultRoute(selectedValue);
  };

  return (
    <Block>
      <select value={DefaultRoute} onChange={handleSelectChange}>
        <option value="" disabled >Seleccione una opción</option>
        {dataRoutes.map((item, index) => (
          <option key={index} value={dataRoutes[index].route_id}  >{dataRoutes[index].destination}</option>
        ))}
      </select>
    </Block>
  );
};
