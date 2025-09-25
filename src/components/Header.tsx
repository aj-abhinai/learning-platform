import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:opacity-90 transition-opacity">
            Learning Hub
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:underline transition-all">
              Home
            </Link>
            <Link href="#" className="hover:underline transition-all">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;