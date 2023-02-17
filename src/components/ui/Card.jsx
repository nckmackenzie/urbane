import { useTheme } from '../../context/ThemeProvider';
function Card({ className, children, title, headerAction, rounded }) {
  const { appBgColor, textColor } = useTheme();
  return (
    <div
      className={`overflow-hidden  shadow p-4 ${appBgColor} ${className} ${
        rounded ? 'rounded-2xl' : ''
      }`}
    >
      {title && !headerAction && (
        <div className={`${textColor} text-lg font-semibold mb-6`}>{title}</div>
      )}
      {title && headerAction && (
        <div className="flex items-center justify-between mb-6">
          <div className={`${textColor} text-lg font-semibold`}>{title}</div>
          {headerAction}
        </div>
      )}
      {children}
    </div>
  );
}

export default Card;
