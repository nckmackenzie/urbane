import {
  PropertyReferals,
  Stats,
  TotalRevenue,
  AgentsCustomerSales,
  PropertyList,
} from '../components/pages/dashboard';
import { PageTitle } from '../components/ui';

function Dashboard() {
  return (
    <div>
      <PageTitle title="Dashboard" />
      <Stats />
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <TotalRevenue />
        <PropertyReferals />
      </div>
      <AgentsCustomerSales />
      <PropertyList />
    </div>
  );
}

export default Dashboard;
