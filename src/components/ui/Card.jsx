import { useTheme } from '../../context/ThemeProvider';
function Card({ className, children, title }) {
  const { appBgColor, textColor } = useTheme();
  return (
    <div className={`overflow-hidden  shadow p-4 ${appBgColor} ${className}`}>
      {title && (
        <div className={`${textColor} text-lg font-semibold mb-6`}>{title}</div>
      )}
      {children}
    </div>
  );
}

export default Card;
