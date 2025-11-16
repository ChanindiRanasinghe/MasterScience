import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { TutorMarketplace } from './pages/TutorMarketplace';
import { MicroLessonLibrary } from './pages/MicroLessonLibrary';
import { CheatSheetLibrary } from './pages/CheatSheetLibrary';
import { ExamPrepLab } from './pages/ExamPrepLab';
import { VirtualClassroom } from './pages/VirtualClassroom';
import { SubjectsCourses } from './pages/SubjectsCourses';
import { Pricing } from './pages/Pricing';
import { Auth } from './pages/Auth';
import { StudentDashboard } from './pages/StudentDashboard';
import { TutorDashboard } from './pages/TutorDashboard';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/tutors" element={<TutorMarketplace />} />
            <Route path="/micro-lessons" element={<MicroLessonLibrary />} />
            <Route path="/cheat-sheets" element={<CheatSheetLibrary />} />
            <Route path="/exam-prep" element={<ExamPrepLab />} />
            <Route path="/virtual-classroom" element={<VirtualClassroom />} />
            <Route path="/subjects" element={<SubjectsCourses />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/tutor-dashboard" element={<TutorDashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
