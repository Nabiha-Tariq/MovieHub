import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="p-4 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-600 dark:text-pink-400">
          Movie House
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/movies">Movies</Link></li>
            <li><Link href="/genres">Genres</Link></li>
            <li><Link href="/directors">Directors</Link></li>
            <li><Link href="/help/contact">Help</Link></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
