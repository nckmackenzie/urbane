import logo from '../../assets/logo-128px.png';
import { useTheme } from '../../context/ThemeProvider';
function Aside() {
  const { appBgColor, textColor } = useTheme();
  return (
    <aside className={`lg:w-72 ${appBgColor}`}>
      <div className="h-24 flex items-center justify-center gap-2">
        <img src={logo} alt="Urbane logo" className="w-16 h-16" />
        <h1 className={`text-2xl uppercase font-bold ${textColor}`}>Urbane</h1>
      </div>
    </aside>
  );
}

export default Aside;
