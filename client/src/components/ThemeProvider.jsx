import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div className={theme}>
      <div className="dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
}

// Tambahkan validasi PropTypes untuk children
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};