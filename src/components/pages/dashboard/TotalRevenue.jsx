import { useTheme } from '../../../context/ThemeProvider';
import ReactApexChart from 'react-apexcharts';
import { TotalRevenueSeries, TotalRevenueOptions } from '../../../data/data';
import { Card } from '../../ui';

function TotalRevenue() {
  const { textColor } = useTheme();
  return (
    <Card className="rounded-2xl w-full md:w-3/4 ">
      <div className={`${textColor} text-lg font-semibold mb-6`}>
        Total Revenue
      </div>
      <div className={`font-bold text-3xl ${textColor}`}>KES 614,000</div>
      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Card>
  );
}

export default TotalRevenue;
