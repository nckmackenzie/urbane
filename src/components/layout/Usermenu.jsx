import { useState } from 'react';
import avatar from '../../assets/user-avator.jpg';
import { useTheme } from '../../context/ThemeProvider';
import { useUserMenu } from '../../context/UserMenuProvider';
import Menu from './Menu';
function Usermenu() {
  const { textColor, textColorSec } = useTheme();
  const { showMenu, displayMenu } = useUserMenu();
  return (
    <div className="ml-auto rounded relative">
      <div
        className="p-2 flex gap-2 items-center cursor-pointer transition-all hover:shadow usermenu"
        onClick={displayMenu}
      >
        <img
          src={avatar}
          alt="user avatar"
          className="w-14 h-14 rounded-full usermenu"
        />
        <div className="text-sm usermenu">
          <h2 className={`font-semibold ${textColor} usermenu`}>
            Nick Mackenzie
          </h2>
          <span className={`${textColorSec} usermenu`}>Software Developer</span>
        </div>
      </div>

      {showMenu && <Menu />}
    </div>
  );
}

export default Usermenu;
