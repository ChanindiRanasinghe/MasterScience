import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { GraduationCap, BookOpen, Users, Award, Clock, Video, FileText, Target, Star } from 'lucide-react';
import heroImage from 'figma:asset/4a5148dfdd634da9ec3d2b12f6d7d2a98e1171ce.png';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl mb-6">MASTER SCIENCE</h1>
              <p className="text-xl text-gray-300 mb-8">
                Unlock your A/L Science potential with short lessons, expert support, and powerful study tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/auth">
                  <Button size="lg" className="bg-white text-[#020C35] hover:bg-blue-600 hover:text-white px-8 transition-colors">
                    Start Learning Free
                  </Button>
                </Link>
                <Link to="/tutors">
                  <Button size="lg" className="bg-white text-[#020C35] hover:bg-blue-600 hover:text-white px-8 transition-colors">
                    Find a Tutor
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <div className="text-3xl">10,000+</div>
                  <div className="text-gray-300">Active Students</div>
                </div>
                <div>
                  <div className="text-3xl">500+</div>
                  <div className="text-gray-300">Expert Tutors</div>
                </div>
                <div>
                  <div className="text-3xl">98%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Science education - atom and molecular structures with laboratory equipment"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Why Choose ExpertLearn?</h2>
            <p className="text-xl text-gray-600">
              Comprehensive learning platform designed for advanced students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <GraduationCap className="w-12 h-12 text-[#020C35] mb-4" />
                <h3 className="mb-2">Expert Tutors</h3>
                <p className="text-gray-600">PhD-level educators with proven teaching excellence</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Video className="w-12 h-12 text-[#020C35] mb-4" />
                <h3 className="mb-2">Live Sessions</h3>
                <p className="text-gray-600">Interactive virtual classrooms with real-time collaboration</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <BookOpen className="w-12 h-12 text-[#020C35] mb-4" />
                <h3 className="mb-2">Rich Resources</h3>
                <p className="text-gray-600">Thousands of lessons, cheat sheets, and practice materials</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-[#020C35] mb-4" />
                <h3 className="mb-2">Proven Results</h3>
                <p className="text-gray-600">Track record of student success in competitive exams</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Advanced Subjects We Cover</h2>
            <p className="text-xl text-gray-600">
              Specialized tutoring in STEM subjects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Advanced Mathematics', topics: 'Calculus, Linear Algebra, Differential Equations', icon: '∫' },
              { name: 'Physics', topics: 'Mechanics, Electromagnetism, Quantum Physics', icon: 'ℏ' },
              { name: 'Chemistry', topics: 'Organic, Inorganic, Physical Chemistry', icon: '⚛' },
              { name: 'General Science', topics: 'Biology, Environmental Science, Research', icon: '🔬' }
            ].map((subject, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="text-5xl mb-4">{subject.icon}</div>
                  <h3 className="mb-2">{subject.name}</h3>
                  <p className="text-gray-600">{subject.topics}</p>
                  <Link to="/subjects">
                    <Button variant="link" className="mt-4 text-[#020C35]">
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4 bg-[#020C35] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Complete Learning Platform</h2>
            <p className="text-xl text-gray-300">
              Everything you need to excel in your studies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <Link to="/tutors" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-[#020C35] mb-4" />
                  <h3 className="mb-2">Tutor Marketplace</h3>
                  <p className="text-gray-600">Browse and book sessions with expert tutors matched to your needs</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/micro-lessons" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Clock className="w-12 h-12 text-[#020C35] mb-4" />
                  <h3 className="mb-2">Micro-Lesson Library</h3>
                  <p className="text-gray-600">Bite-sized video lessons on specific topics you can watch anytime</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/cheat-sheets" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <FileText className="w-12 h-12 text-[#020C35] mb-4" />
                  <h3 className="mb-2">Cheat Sheet Library</h3>
                  <p className="text-gray-600">Quick reference guides and formulas for rapid revision</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/exam-prep" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-[#020C35] mb-4" />
                  <h3 className="mb-2">Exam Prep Lab</h3>
                  <p className="text-gray-600">Practice tests and prep materials for competitive exams</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/virtual-classroom" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Video className="w-12 h-12 text-[#020C35] mb-4" />
                  <h3 className="mb-2">Virtual Classroom</h3>
                  <p className="text-gray-600">Interactive whiteboard, screen sharing, and real-time collaboration</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/student-dashboard" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 text-[#020C35] mb-4" />
                  <h3 className="mb-2">Progress Tracking</h3>
                  <p className="text-gray-600">Monitor your learning journey with detailed analytics</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how ExpertLearn transformed their academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'MIT Physics Student',
                text: 'The advanced physics tutoring helped me ace my entrance exams. The tutors really understand complex concepts and explain them clearly.',
                rating: 5
              },
              {
                name: 'Michael Rodriguez',
                role: 'Chemistry Major',
                text: 'Organic chemistry was my biggest challenge until I found ExpertLearn. The personalized approach made all the difference.',
                rating: 5
              },
              {
                name: 'Emma Thompson',
                role: 'Mathematics Olympiad Winner',
                text: 'The micro-lessons and practice materials are incredible. I went from struggling to winning competitions in just 6 months.',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#020C35] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Excel in Your Studies?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students who have transformed their academic performance with ExpertLearn
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-white text-[#020C35] hover:bg-gray-100">
                Get Started Free
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}