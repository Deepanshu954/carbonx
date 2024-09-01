import React from 'react';
import { Line } from 'react-chartjs-2';

function EmissionGraph({ emissionsData }) {
  const data = {
    labels: emissionsData.map(d => d.year),
    datasets: [
      {
        label: 'Carbon Emissions (tons)',
        data: emissionsData.map(d => d.carbonEmission),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Emission Trends</h2>
      <Line data={data} />
    </div>
  );
}

export default EmissionGraph;
