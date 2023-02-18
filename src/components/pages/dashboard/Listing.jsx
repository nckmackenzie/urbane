import { MdLocationOn } from 'react-icons/md';
import { sale1 } from '../../../assets';
import { useTheme } from '../../../context/ThemeProvider';
function Listing() {
  const { textColor, badgeBgColor, textColorSec } = useTheme();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div>
        <img
          src={sale1}
          alt="Some alt text"
          className="max-w-full h-auto rounded-lg mb-2"
        />
        <div className="flex items-center justify-between mb-1">
          <div className={`${textColor} font-semibold`}>
            Star Sun Hotel & Apartment
          </div>
          <span
            className={`inline-block py-[7px] px-[9px] text-xs ${badgeBgColor} text-primary rounded font-semibold`}
          >
            $500
          </span>
        </div>
        <div className={`${textColor} flex items-center gap-2`}>
          <MdLocationOn size={16} />
          <span className={`text-sm ${textColorSec}`}>Some Town,City</span>
        </div>
      </div>
    </div>
  );
}

export default Listing;
