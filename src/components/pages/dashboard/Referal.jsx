import { useTheme } from '../../../context/ThemeProvider';

function Referal({ title, percentage, color }) {
  const { textColor } = useTheme();
  const remaining = 100 - Number(percentage);
  return (
    <div>
      <div
        className={`text-base font-medium flex items-center justify-between mb-2 ${textColor}`}
      >
        <div>{title}</div>
        <div>{`${percentage}%`}</div>
      </div>
      <div className="rounded-md overflow-hidden flex">
        <div
          className="bg-red-400 h-2"
          style={{ backgroundColor: color, width: `${percentage}%` }}
        ></div>
        <div
          className="bg-[#E4E8EF] h-2"
          style={{ width: `${remaining}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Referal;
