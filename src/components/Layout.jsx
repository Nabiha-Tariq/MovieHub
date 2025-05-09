import Header from './Header';
import { useTheme } from '@/context/ThemeContext';

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();  // Access the theme state

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-pink' : 'bg-white text-gray-900'}`}>
      <Header />
      <main className="container mx-auto px-4 py-8">{children}</main>
      {/* Footer section directly inside Layout */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Movie House. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
