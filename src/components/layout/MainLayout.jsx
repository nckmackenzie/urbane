import { Outlet } from 'react-router-dom';
import { useTheme } from '../../context/ThemeProvider';
import { useUserMenu } from '../../context/UserMenuProvider';
import Aside from './Aside';
import Header from './Header';
function MainLayout() {
  const { bgColor } = useTheme();
  const { hideMenu } = useUserMenu();

  const onClickHandler = e => {
    if (e.target.classList.contains('usermenu')) return;
    hideMenu();
  };
  return (
    <div className="lg:flex" onClick={onClickHandler}>
      <Aside />
      <main className={`lg:flex-1 min-h-[100dvh] ${bgColor}`}>
        <Header />
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
