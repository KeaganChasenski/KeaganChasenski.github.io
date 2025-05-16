import React from 'react';
import Table from './Table';
import data from '../../data/stats/random';

const RandomStats = () => (
  <>
    <h3>Random guiding statistics</h3>
    <Table data={data} />
  </>
);
export default RandomStats;
