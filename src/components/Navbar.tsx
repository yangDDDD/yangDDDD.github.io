
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "首页", href: "#home" },
    { label: "研究方向", href: "#research" },
    { label: "发表论文", href: "#publications" },
    { label: "教学", href: "#teaching" },
    { label: "联系方式", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 bg-white border-b z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-navy-dark font-serif text-xl font-bold">王教授</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className="text-gray-600 hover:text-navy transition-colors font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col container mx-auto">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 px-4 text-gray-600 hover:bg-gray-50 hover:text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
