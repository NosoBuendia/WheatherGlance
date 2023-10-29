import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';


const Block = styled.div`
color:#FAFAFA;
background-color: #22222F;
border-radius: 5px;
`
const data = [
    { hour: '00:00', temp: 14.3 },
    { hour: '03:00', temp: 14.2 },
    { hour: '06:00', temp: 19.0 },
    { hour: '09:00', temp: 23.2 },
    { hour: '12:00', temp: 24.2 },
    { hour: '15:00', temp: 22.4 },
    { hour: '18:00', temp: 20.1 },
    { hour: '22:00', temp: 12.5 },];

export default function Today() {
    return (
        <Block>
            <div style={{ width: `100%`, height: `100%` }}>
                <ResponsiveContainer>
                    <BarChart width={620} height={150} data={data}>
                        <Bar dataKey="temp" fill="white" />
                        <XAxis dataKey="hour" />
                        <YAxis />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Block>
    );
}
