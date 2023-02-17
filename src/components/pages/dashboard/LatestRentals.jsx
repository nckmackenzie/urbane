import { lastestRentals, latestSales } from '../../../data/data';
import { Card, CardActionButton } from '../../ui';
import Property from './Property';

function LatestRentals() {
  return (
    <Card rounded title="Latest Rentals" headerAction={<CardActionButton />}>
      <div className="flex flex-col gap-2">
        {lastestRentals?.map(sale => (
          <Property key={sale.id} {...sale} />
        ))}
      </div>
    </Card>
  );
}

export default LatestRentals;
