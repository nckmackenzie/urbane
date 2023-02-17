import { HiDotsVertical } from 'react-icons/hi';
import { useTheme } from '../../../context/ThemeProvider';

function Agent({ avatar, name }) {
  const { textColor, textColorSec } = useTheme();
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-2xl" />
        <div>
          <div className={`text-sm ${textColor}`}>{name}</div>
          <div className={`text-xs ${textColorSec}`}>Top Agent</div>
        </div>
      </div>
      <button className="">
        <HiDotsVertical />
      </button>
    </div>
  );
}

export default Agent;
