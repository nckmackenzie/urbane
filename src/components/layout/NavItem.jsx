import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeProvider';

function NavItem({ path, name, icon }) {
  const { textColorSec } = useTheme();
  const location = useLocation();
  return (
    <li className="">
      <Link
        to={path}
        className={`flex items-center gap-1 ${
          path === location.pathname ? 'text-app-light-bg' : textColorSec
        } rounded-md p-4 ${
          path === location.pathname
            ? 'bg-primary'
            : 'hover:bg-primary hover:text-app-light-bg'
        } `}
      >
        <span>{icon}</span>
        <span className={`text-lg font-medium text-inh`}>{name}</span>
      </Link>
    </li>
  );
}

export default NavItem;
