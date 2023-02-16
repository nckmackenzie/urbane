import { BiSearch } from 'react-icons/bi';
import { useTheme } from '../../context/ThemeProvider';

function SearchInput() {
  const { bgColor, textColorSec, textColor } = useTheme();
  return (
    <form
      action=""
      role="search"
      className={`${bgColor} relative w-1/4 ${textColor}`}
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <BiSearch />
      </span>
      <input
        type="search"
        name="q"
        className={`w-full py-2 text-sm text-white bg-inherit rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 placeholder:${textColorSec}`}
        placeholder="Search property,customer,etc..."
        autoComplete="off"
      />
    </form>
  );
}

export default SearchInput;
