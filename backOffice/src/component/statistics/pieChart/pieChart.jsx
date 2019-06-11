import React from 'react';
import { graphql } from 'react-apollo';
import { get } from 'lodash';
import PropTypes from 'prop-types';
// import Chart from 'react-google-charts';
import TOPUSERCOMMANDERS from '../../../graphql/statistics/topUserCommandesQuery';
import getOrderStatistics from '../../../utils/getOrderStatistics';

// const pieOptions = {
//   title: '',
//   pieHole: 0.6,
//   slices: [
//     {
//       color: '#2BB673',
//     },
//     {
//       color: '#d91e48',
//     },
//     {
//       color: '#007fad',
//     },
//     {
//       color: '#e9a227',
//     },
//   ],
//   legend: {
//     position: 'bottom',
//     alignment: 'center',
//     textStyle: {
//       color: '233238',
//       fontSize: 14,
//     },
//   },
//   tooltip: {
//     showColorCode: true,
//   },
//   chartArea: {
//     left: 0,
//     top: 0,
//     width: '100%',
//     height: '80%',
//   },
//   fontName: 'Roboto',
// };
function PieChart({ data }) {
  const result = get(data, 'topUserCommandes', []);
  const statOrders = getOrderStatistics(result);
  console.log(statOrders);
  return (
    <div className="App">
      <p>les plus fidéles utilisateurs</p>
      {/* <Chart
        chartType="PieChart"
        data={statOrders}
        options={pieOptions}
        graph_id="PieChart"
        width="100%"
        height="400px"
        legend_toggle
      /> */}
    </div>
  );
}

PieChart.propTypes = {
  data: PropTypes.object,
};

export default graphql(TOPUSERCOMMANDERS)(PieChart);
