import { createContext, useState, useContext } from 'react';

const userMenuContext = createContext({
  showMenu: false,
  displayMenu: () => {},
  hideMenu: () => {},
});

export const UserMenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const displayMenu = () => {
    setShowMenu(true);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
    <userMenuContext.Provider value={{ showMenu, displayMenu, hideMenu }}>
      {children}
    </userMenuContext.Provider>
  );
};

//hook
export const useUserMenu = () => {
  return useContext(userMenuContext);
};
