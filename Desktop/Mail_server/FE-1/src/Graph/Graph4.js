import React from 'react';
import { Line } from '@ant-design/charts';


function Graph4() {


const data = [
  {date: '03/14/2023 00:00:00', xz: 0.2},
  {date: '03/14/2023 12:00:30 AM', xz: 0.2},
  {date: '03/14/2023 12:01:00 AM', xz: 0.2},
  {date: '03/14/2023 12:01:30 AM', xz: 0.2},
  {date: '03/14/2023 12:02:00 AM', xz: 0.2},
  {date: '03/14/2023 12:02:30 AM', xz: 0.2},
  {date: '03/14/2023 12:03:00 AM', xz: 0.2},
  {date: '03/14/2023 12:03:30 AM', xz: 0.2},
  {date: '03/14/2023 12:04:00 AM', xz: 0.2}
];

const averageXz = data.reduce((total, d) => total + d.xz, 0) / data.length;

const config = {
  data: [
    ...data,
    {
      type: "femme",
      date: 'Average',
      xz: averageXz,
    },
  ],
  xField: 'date',
  yField: 'xz',
  seriesField: 'name',  
  point: {
    size: 5,
    shape: 'breath-point',
    // color: 'green', 
  },
  
};

  return <Line {...config} />;

  };
  
export default Graph4
