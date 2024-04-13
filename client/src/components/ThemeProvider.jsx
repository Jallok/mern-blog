import { useSelector } from "react-redux";
import PropTypes from "prop-types";

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);

  const themeClass = theme === "dark" ? "dark" : "";
  return (
    <div className={`${themeClass} min-h-screen`}>
      <div className="bg-white dark:bg-[rgb(16,23,42)] text-gray-700 dark:text-gray-200 min-h-screen">
        {children}
      </div>
    </div>
  );
}
