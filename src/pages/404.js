import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! Page not found.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-pink-600  hover:bg-pink-700 text-white rounded-md  transition"
      >
        Go Home
      </Link>
    </div>
  );
}
