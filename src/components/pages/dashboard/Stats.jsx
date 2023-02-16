import ReactApexChart from 'react-apexcharts';
import { useTheme } from '../../../context/ThemeProvider';
import { dashboardStats } from '../../../data/data';
import { Card } from '../../ui';

function Stats() {
  const { textColorSec, textColor } = useTheme();
  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
      {dashboardStats?.map(stat => (
        <Card
          className="rounded-2xl flex items-center justify-between"
          key={stat.title}
        >
          <div className="">
            <div className={`${textColorSec} text-sm font-medium mb-1`}>
              {stat.title}
            </div>
            <div className={`font-bold text-2xl ${textColor}`}>
              {stat.value}
            </div>
          </div>
          <ReactApexChart
            options={{
              chart: { type: 'donut' },
              colors: stat.colors,
              legend: { show: false },
              dataLabels: { enabled: false },
            }}
            series={stat.series}
            type="donut"
            width="120px"
          />
        </Card>
      ))}
    </div>
  );
}

export default Stats;
