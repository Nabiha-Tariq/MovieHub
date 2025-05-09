import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      className="p-2 rounded-full bg-pink-600 text-white dark:bg-pink-400"
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
