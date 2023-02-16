import { useTheme } from '../../context/ThemeProvider';

function PageTitle(props) {
  const { textColor } = useTheme();
  return (
    <h3 className={`${textColor} font-bold text-2xl mb-4`}>{props.title}</h3>
  );
}

export default PageTitle;
