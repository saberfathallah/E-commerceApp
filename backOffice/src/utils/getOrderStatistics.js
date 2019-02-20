import { map } from 'lodash';
function getOrderStatistics(data) {
  const statOrders = [];
  statOrders.push(['name', 'stat']);
  map(data, (item) => {
    statOrders.push([item.name, item.count]);
  });
  return statOrders;
}

export default getOrderStatistics;
