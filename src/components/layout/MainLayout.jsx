import { Outlet } from 'react-router-dom';
import { useTheme } from '../../context/ThemeProvider';
import Aside from './Aside';
function MainLayout() {
  const { appBgColor, bgColor } = useTheme();
  return (
    <div className="lg:flex">
      <Aside />
      <main className={`lg:flex-1 bg-green-200 min-h-[100dvh] ${bgColor}`}>
        <header className={`h-24 ${appBgColor}`}></header>
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
