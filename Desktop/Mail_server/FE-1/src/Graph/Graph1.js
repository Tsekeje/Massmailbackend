import React from 'react';
import { Line } from '@ant-design/charts';


function Graph1() {

const data1 = [
  {date: '03/14/2023 00:00:00', xz: 21.7},
  {date: '03/14/2023 12:00:30 AM', xz: 21.7},
  {date: '03/14/2023 12:01:00 AM', xz: 21.7},
];

const data2 = [
  {date: '03/14/2023 00:00:00', xz: 0.2},
  {date: '03/14/2023 12:00:30 AM', xz: 0.2},
  {date: '03/14/2023 12:01:00 AM', xz: 0.2},
];

const averageXz1 = data1.reduce((total, d) => total + d.xz, 0) / data1.length;
const averageXz2 = data2.reduce((total, d) => total + d.xz, 0) / data2.length;

const config = {
  data: [
    ...data1.map((d) => ({ ...d, name: 'Line 1' })),
    ...data2.map((d) => ({ ...d, name: 'Line 2' })),
    {
      type: 'average',
      date: 'Average 1',
      xz: averageXz1,
      name: 'Line 1'
    },
    {
      type: 'average',
      date: 'Average 2',
      xz: averageXz2,
      name: 'Line 2'
    }
  ],
  xField: 'date',
  yField: 'xz',
  seriesField: 'name',
  point: {
    size: 5,
    shape: 'diamond',
  },
};

return <Line {...config} />;

  };
  
export default Graph1
