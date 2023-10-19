import styled from 'styled-components';
import background from './IMG_20210820_091858.jpg';

const Block = styled.div`
background-color: white;
max-height:100%; 
`

export default function Transit() {
  return (
    <Block style={{ backgroundImage: `url(${background})`, backgroundSize: `100%`, backgroundRepeat: `no-repeat`}}>  
    </Block>
  );
}
