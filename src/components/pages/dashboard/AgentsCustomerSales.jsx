import Agents from './Agents';
import LatestRentals from './LatestRentals';
import LatestSales from './LatestSales';

function AgentsCustomerSales() {
  return (
    <div className="mt-4 flex flex-col gap-6 md:grid md:grid-cols-3">
      <Agents />
      <LatestSales />
      <LatestRentals />
    </div>
  );
}

export default AgentsCustomerSales;
