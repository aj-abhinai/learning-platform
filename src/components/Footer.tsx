export default function Footer() {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="text-center text-gray-600 mb-2">
          <p>&copy; {new Date().getFullYear()} Learning Hub. All rights reserved.</p>
        </div>
      </div>
      <div className="absolute bottom-2 right-4">
        <div className="text-xs text-gray-400">
          <a href="https://inverted-dodo.github.io/" className="hover:text-gray-600 transition-colors">
            Built by Inverted dodo
          </a>
        </div>
      </div>
    </footer>
  );
}