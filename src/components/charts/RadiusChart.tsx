import React from 'react'
import Card from '@mui/material/Card';
import {RadialBarChart,RadialBar,Legend,Tooltip,ResponsiveContainer} from 'recharts';


export default function Radiuschart() {
    const data = [
        {
          "name": "18-24",
          "uv": 31.47,
          "pv": 2400,
          "fill": "#8884d8"
        },
        {
          "name": "25-29",
          "uv": 26.69,
          "pv": 4567,
          "fill": "#83a6ed"
        },
        {
          "name": "30-34",
          "uv": -15.69,
          "pv": 1398,
          "fill": "#8dd1e1"
        },
        {
          "name": "35-39",
          "uv": 8.22,
          "pv": 9800,
          "fill": "#82ca9d"
        },
        {
          "name": "40-49",
          "uv": -8.63,
          "pv": 3908,
          "fill": "#a4de6c"
        },
        
      ]
  return (
    <>
    <Card sx={{ minWidth: 275,p:2,pb:6}}>
    <ResponsiveContainer width='100%' height={250}>                        
        <RadialBarChart 
        innerRadius="30%" 
        outerRadius="150%" 
        data={data} 
        startAngle={180} 
        endAngle={0}
        margin={{ top: 100,}}
        >
            <RadialBar  label={{ fill: '#666', position: 'insideStart' }} background  dataKey='uv' />
            <Legend iconSize={10} width={100} height={100} layout='vertical' verticalAlign='bottom' align="right" />
            <Tooltip />
        </RadialBarChart>
    </ResponsiveContainer>
    </Card> 
    </>
  )
}
