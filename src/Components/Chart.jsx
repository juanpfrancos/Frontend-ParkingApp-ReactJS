import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export function ChartPie({disp, ocup}) {
    const data = {
        labels: ['Disponible', 'Ocupado'],
        title: {
          display: true,
          text: 'Custom Chart Title'
      },
        datasets: [
          {
            label: 'Disponibilidad',
            data: [disp, ocup],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };
  return <Pie data={data} />;
}