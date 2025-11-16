import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Book, Users, Clock, Award } from 'lucide-react';

const subjects = [
  {
    id: 1,
    name: 'Advanced Calculus',
    category: 'Mathematics',
    icon: '∫',
    topics: ['Limits & Continuity', 'Differentiation', 'Integration', 'Series & Sequences', 'Multivariable Calculus', 'Differential Equations'],
    tutors: 85,
    students: 2400,
    avgRating: 4.9,
    difficulty: 'Advanced'
  },
  {
    id: 2,
    name: 'Linear Algebra',
    category: 'Mathematics',
    icon: '⊕',
    topics: ['Vector Spaces', 'Matrices', 'Eigenvalues & Eigenvectors', 'Linear Transformations', 'Inner Product Spaces', 'Applications'],
    tutors: 62,
    students: 1800,
    avgRating: 4.8,
    difficulty: 'Advanced'
  },
  {
    id: 3,
    name: 'Abstract Algebra',
    category: 'Mathematics',
    icon: '∈',
    topics: ['Group Theory', 'Ring Theory', 'Field Theory', 'Galois Theory', 'Module Theory', 'Representation Theory'],
    tutors: 42,
    students: 950,
    avgRating: 4.9,
    difficulty: 'Expert'
  },
  {
    id: 4,
    name: 'Classical Mechanics',
    category: 'Physics',
    icon: 'F',
    topics: ['Newtonian Mechanics', 'Lagrangian Mechanics', 'Hamiltonian Mechanics', 'Oscillations', 'Rigid Body Dynamics', 'Central Forces'],
    tutors: 78,
    students: 2100,
    avgRating: 4.8,
    difficulty: 'Advanced'
  },
  {
    id: 5,
    name: 'Electromagnetism',
    category: 'Physics',
    icon: '⚡',
    topics: ['Electrostatics', 'Magnetostatics', "Maxwell's Equations", 'Electromagnetic Waves', 'Electromagnetic Radiation', 'Special Relativity'],
    tutors: 71,
    students: 1950,
    avgRating: 4.9,
    difficulty: 'Advanced'
  },
  {
    id: 6,
    name: 'Quantum Mechanics',
    category: 'Physics',
    icon: 'ℏ',
    topics: ['Wave-Particle Duality', 'Schrödinger Equation', 'Quantum Operators', 'Angular Momentum', 'Perturbation Theory', 'Quantum Computing'],
    tutors: 56,
    students: 1400,
    avgRating: 5.0,
    difficulty: 'Expert'
  },
  {
    id: 7,
    name: 'Organic Chemistry',
    category: 'Chemistry',
    icon: '⬡',
    topics: ['Bonding & Structure', 'Reaction Mechanisms', 'Stereochemistry', 'Aromatic Chemistry', 'Spectroscopy', 'Synthesis'],
    tutors: 92,
    students: 2800,
    avgRating: 4.7,
    difficulty: 'Advanced'
  },
  {
    id: 8,
    name: 'Physical Chemistry',
    category: 'Chemistry',
    icon: '⚛',
    topics: ['Thermodynamics', 'Quantum Chemistry', 'Kinetics', 'Statistical Mechanics', 'Electrochemistry', 'Surface Chemistry'],
    tutors: 68,
    students: 1600,
    avgRating: 4.8,
    difficulty: 'Advanced'
  },
  {
    id: 9,
    name: 'Inorganic Chemistry',
    category: 'Chemistry',
    icon: '◇',
    topics: ['Coordination Chemistry', 'Crystal Field Theory', 'Organometallic Chemistry', 'Bioinorganic Chemistry', 'Solid State Chemistry', 'Materials Science'],
    tutors: 54,
    students: 1200,
    avgRating: 4.7,
    difficulty: 'Advanced'
  }
];

const categories = ['All', 'Mathematics', 'Physics', 'Chemistry'];

export function SubjectsCourses() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Subjects & Courses</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive curriculum covering advanced mathematics, physics, and chemistry
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl text-[#020C35] mb-1">50+</div>
              <div className="text-gray-600">Subject Areas</div>
            </div>
            <div>
              <div className="text-3xl text-[#020C35] mb-1">500+</div>
              <div className="text-gray-600">Expert Tutors</div>
            </div>
            <div>
              <div className="text-3xl text-[#020C35] mb-1">200+</div>
              <div className="text-gray-600">Topic Coverage</div>
            </div>
            <div>
              <div className="text-3xl text-[#020C35] mb-1">10K+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Browse by Subject</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <Card key={subject.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  {/* Icon & Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-[#020C35] rounded-lg flex items-center justify-center text-white text-3xl">
                      {subject.icon}
                    </div>
                    <Badge variant={subject.difficulty === 'Expert' ? 'destructive' : 'default'}>
                      {subject.difficulty}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl mb-1">{subject.name}</h3>
                  <p className="text-[#020C35] mb-4">{subject.category}</p>

                  {/* Topics */}
                  <div className="mb-4">
                    <p className="text-sm mb-2">Key Topics:</p>
                    <div className="flex flex-wrap gap-1">
                      {subject.topics.slice(0, 3).map((topic, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {subject.topics.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{subject.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{subject.tutors} Tutors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{subject.avgRating} Rating</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book className="w-4 h-4" />
                      <span>{subject.students} Students Enrolled</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-[#020C35] hover:bg-[#020C35]/90">
                    Explore Subject
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Structured Learning Paths</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-4">Mathematics Track</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                    <span>Calculus Fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                    <span>Linear Algebra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                    <span>Differential Equations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
                    <span>Abstract Algebra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
                    <span>Real & Complex Analysis</span>
                  </li>
                </ol>
                <Button className="w-full mt-6 bg-[#020C35]">Start Path</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-4">Physics Track</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                    <span>Classical Mechanics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                    <span>Electromagnetism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                    <span>Thermodynamics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
                    <span>Quantum Mechanics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
                    <span>Statistical Physics</span>
                  </li>
                </ol>
                <Button className="w-full mt-6 bg-[#020C35]">Start Path</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-4">Chemistry Track</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                    <span>General Chemistry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                    <span>Organic Chemistry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                    <span>Physical Chemistry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
                    <span>Inorganic Chemistry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-[#020C35] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
                    <span>Analytical Chemistry</span>
                  </li>
                </ol>
                <Button className="w-full mt-6 bg-[#020C35]">Start Path</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#020C35] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Master Advanced STEM?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start learning with expert tutors in your chosen subject area
          </p>
          <Button size="lg" className="bg-white text-[#020C35] hover:bg-gray-100">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
