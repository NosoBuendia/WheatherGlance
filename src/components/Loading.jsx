import styled from 'styled-components';

const Block = styled.div`
color:#FAFAFA;
background-color: #22222F;
display: flex;
align-items: center;
justify-content: center;
min-height: 98%;
margin: 1%;
border-radius: 5px;
`

export default function Loading() {
    return (
        <Block>
            <p>Loading...</p>
        </Block>
    );
}
