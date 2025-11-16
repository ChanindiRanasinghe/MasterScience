import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#020C35] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8" />
              <span className="text-xl">ExpertLearn</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Advanced online tutoring for mathematics, science, physics, and chemistry students.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-300 transition-colors">About Us</Link></li>
              <li><Link to="/tutors" className="text-gray-300 hover:text-blue-300 transition-colors">Find Tutors</Link></li>
              <li><Link to="/subjects" className="text-gray-300 hover:text-blue-300 transition-colors">Subjects</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-blue-300 transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-blue-300 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/micro-lessons" className="text-gray-300 hover:text-blue-300 transition-colors">Micro-Lessons</Link></li>
              <li><Link to="/cheat-sheets" className="text-gray-300 hover:text-blue-300 transition-colors">Cheat Sheets</Link></li>
              <li><Link to="/exam-prep" className="text-gray-300 hover:text-blue-300 transition-colors">Exam Prep</Link></li>
              <li><Link to="/virtual-classroom" className="text-gray-300 hover:text-blue-300 transition-colors">Virtual Classroom</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-300 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-blue-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-blue-300 transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 ExpertLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
