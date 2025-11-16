import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/2effd010125233c029079a1415f98bf7abb2a81d.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);
  const [showMobileResources, setShowMobileResources] = useState(false);

  return (
    <nav className="bg-[#020C35] text-white sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="ExpertLearn" style={{ height: '95px' }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-300 transition-colors">About Us</Link>
            <Link to="/tutors" className="hover:text-blue-300 transition-colors">Tutors</Link>
            
            <div 
              className="relative"
            >
              <button 
                className="flex items-center gap-1 hover:text-blue-300 transition-colors"
                onClick={() => setShowResourcesMenu(!showResourcesMenu)}
              >
                Resources <ChevronDown className={`w-4 h-4 transition-transform ${showResourcesMenu ? 'rotate-180' : ''}`} />
              </button>
              {showResourcesMenu && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-xl py-2 w-56 z-50">
                  <Link 
                    to="/micro-lessons" 
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setShowResourcesMenu(false)}
                  >
                    Micro-Lesson Library
                  </Link>
                  <Link 
                    to="/cheat-sheets" 
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setShowResourcesMenu(false)}
                  >
                    Cheat Sheet Library
                  </Link>
                  <Link 
                    to="/exam-prep" 
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setShowResourcesMenu(false)}
                  >
                    Exam Prep Lab
                  </Link>
                  <Link 
                    to="/virtual-classroom" 
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setShowResourcesMenu(false)}
                  >
                    Virtual Classroom
                  </Link>
                </div>
              )}
            </div>

            <Link to="/subjects" className="hover:text-blue-300 transition-colors">Subjects</Link>
            <Link to="/pricing" className="hover:text-blue-300 transition-colors">Pricing</Link>
            <Link to="/blog" className="hover:text-blue-300 transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" className="text-white hover:text-blue-300 hover:bg-white/10">
                Login
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-white text-[#020C35] hover:bg-gray-100">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-3">
              <Link to="/" className="hover:text-blue-300 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="hover:text-blue-300 transition-colors" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link to="/tutors" className="hover:text-blue-300 transition-colors" onClick={() => setIsOpen(false)}>Tutors</Link>
              
              <button 
                className="flex items-center gap-1 hover:text-blue-300 transition-colors text-left"
                onClick={() => setShowMobileResources(!showMobileResources)}
              >
                Resources <ChevronDown className={`w-4 h-4 transition-transform ${showMobileResources ? 'rotate-180' : ''}`} />
              </button>
              {showMobileResources && (
                <div className="flex flex-col gap-2 pl-4">
                  <Link to="/micro-lessons" className="hover:text-blue-300 transition-colors" onClick={() => setIsOpen(false)}>Micro-Lesson Library</Link>
                  <Link to="/cheat-sheets" className="hover:text-blue-300 transition-colors" onClick={() => setIsOpen(false)}>Cheat Sheet Library</Link>
                  <Link to="/exam-prep" className="hover:text-blue-300 transition-colors" onClick={() => setIsOpen(false)}>Exam Prep Lab</Link>
                  <Link to="/virtual-classroom" className="hover:text-blue-300 transition-colors" onClick={() => setIsOpen(false)}>Virtual Classroom</Link>
                </div>
              )}
              
              <Link to="/subjects" className="hover:text-blue-300 transition-colors" onClick={() => setIsOpen(false)}>Subjects</Link>
              <Link to="/pricing" className="hover:text-blue-300 transition-colors" onClick={() => setIsOpen(false)}>Pricing</Link>
              <Link to="/blog" className="hover:text-blue-300 transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link to="/contact" className="hover:text-blue-300 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <Link to="/auth" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                    Login
                  </Button>
                </Link>
                <Link to="/auth" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-white text-[#020C35] hover:bg-gray-100">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}