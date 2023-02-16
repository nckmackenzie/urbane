import { CiLogout } from 'react-icons/ci';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { useTheme } from '../../context/ThemeProvider';
function Menu() {
  const { textColorSec, appBgColor, darkMode, toggleTheme } = useTheme();
  return (
    <div
      className={`w-48 p-2 absolute -bottom-[125%] left-0 shadow-md rounded-sm ${appBgColor}`}
    >
      <div
        className={`flex gap-2 items-center transition-all hover:text-primary cursor-pointer mb-2 ${textColorSec}`}
        onClick={toggleTheme}
      >
        {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        <span className={`text-sm font-semibold text-inherit  `}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      </div>
      <div
        className={`flex gap-2 items-center transition-all hover:text-primary cursor-pointer mb-2 ${textColorSec}`}
      >
        <CiLogout />
        <span className={`text-sm font-semibold text-inherit ${textColorSec} `}>
          Logout
        </span>
      </div>
    </div>
  );
}

export default Menu;
