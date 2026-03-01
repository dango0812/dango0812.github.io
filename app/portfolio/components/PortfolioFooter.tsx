export default function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-gray-400">© {currentYear}. Donggyu all rights reserved.</p>
      </div>
    </footer>
  );
}
