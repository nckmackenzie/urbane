import { latestSales } from '../../../data/data';
import { Card, CardActionButton } from '../../ui';
import Property from './Property';

function LatestSales() {
  return (
    <Card rounded title="Latest Sales" headerAction={<CardActionButton />}>
      <div className="flex flex-col gap-2">
        {latestSales?.map(sale => (
          <Property key={sale.id} {...sale} />
        ))}
      </div>
    </Card>
  );
}

export default LatestSales;
