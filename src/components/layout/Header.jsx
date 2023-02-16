import { useTheme } from '../../context/ThemeProvider';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { SearchInput } from '../ui';
import Usermenu from './Usermenu';

function Header() {
  const { appBgColor } = useTheme();
  return (
    <header className={`p-4 md:p-6 h-24 flex gap-2 items-center ${appBgColor}`}>
      <button className="inline-flex lg:hidden">
        <AiOutlineMenu size={24} />
      </button>
      <button className="inline-flex lg:hidden">
        <BiSearch size={24} />
      </button>
      <SearchInput />
      <Usermenu />
    </header>
  );
}

export default Header;
