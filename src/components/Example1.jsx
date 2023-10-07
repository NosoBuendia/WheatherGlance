import styled from 'styled-components';

const Block = styled.div`
color:#FAFAFA;
text-align:center;
background-color: blue /**#16161F*/;
width: 99%;
height: 99%;
border-radius: 5px;

`

export default function Example1() {
    return (
        <Block>
            <p>EXAMPLE</p>            
        </Block>
    );
}
