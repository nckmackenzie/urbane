import { useTheme } from '../../../context/ThemeProvider';
import { propertyReferralsInfo } from '../../../data/data';
import { Card } from '../../ui';
import Referal from './Referal';

function PropertyReferals() {
  const { textColor } = useTheme();
  return (
    <Card className={`w-full md:w-1/4 flex flex-col`} title="Property Referals">
      <div className="flex flex-col gap-6 h-[calc(100%-52px)]">
        {propertyReferralsInfo?.map(referal => (
          <Referal key={referal.title} {...referal} />
        ))}
      </div>
    </Card>
  );
}

export default PropertyReferals;
