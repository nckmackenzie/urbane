import { MdOutlineLocationOn } from 'react-icons/md';
import { useTheme } from '../../../context/ThemeProvider';
function Property({ image, name, location, value }) {
  const { textColor, textColorSec } = useTheme();
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-2xl" />
        <div>
          <div className={`text-sm ${textColor}`}>{name}</div>
          <div className={` ${textColorSec} flex items-center`}>
            <MdOutlineLocationOn />
            <span className="text-xs">{location}</span>
          </div>
        </div>
      </div>
      <div className="text-primary font-extrabold">{value}</div>
    </div>
  );
}

export default Property;
