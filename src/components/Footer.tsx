export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Learning Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}