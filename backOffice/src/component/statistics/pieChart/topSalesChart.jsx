import React from 'react';
import { graphql } from 'react-apollo';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';
import TOP_SALES from '../../../graphql/statistics/topUserCommandesQuery';

const pieOptions = {
  title: '',
  pieHole: 0.6,
  slices: [
    {
      color: '#2BB673',
    },
    {
      color: '#d91e48',
    },
    {
      color: '#007fad',
    },
    {
      color: '#e9a227',
    },
  ],
  legend: {
    position: 'bottom',
    alignment: 'center',
    textStyle: {
      color: '233238',
      fontSize: 14,
    },
  },
  tooltip: {
    showColorCode: true,
  },
  chartArea: {
    left: 0,
    top: 0,
    width: '100%',
    height: '80%',
  },
  fontName: 'Roboto',
};

function TopSalesChart({ data }) {
  const result = get(data, 'getTopSales', []);
  console.log('TCL: TopSalesChart -> result', result);

  return (
    <div className="App">
      <p>les plus produits vendus</p>
      <Chart
        chartType="PieChart"
        data={[['Age', 'Weight'], ['a', 12], ['b', 5.5]]}
        options={pieOptions}
        graph_id="PieChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    </div>
  );
}

TopSalesChart.propTypes = {
  data: PropTypes.object,
};

export default graphql(TOP_SALES)(TopSalesChart);
