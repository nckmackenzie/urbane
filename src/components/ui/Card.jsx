import { useTheme } from '../../context/ThemeProvider';
function Card({ className, children }) {
  const { appBgColor } = useTheme();
  return (
    <div className={`overflow-hidden  shadow p-4 ${appBgColor} ${className}`}>
      {children}
    </div>
  );
}

export default Card;
