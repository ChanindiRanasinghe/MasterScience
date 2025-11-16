import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { FileCheck, Clock, Target, BarChart, Book, Award } from 'lucide-react';

const exams = [
  {
    id: 1,
    name: 'AP Calculus BC',
    type: 'Advanced Placement',
    questions: 120,
    duration: '180 min',
    difficulty: 'Advanced',
    students: '5.2K'
  },
  {
    id: 2,
    name: 'SAT Subject Test: Physics',
    type: 'Standardized Test',
    questions: 75,
    duration: '60 min',
    difficulty: 'Advanced',
    students: '4.8K'
  },
  {
    id: 3,
    name: 'AP Chemistry',
    type: 'Advanced Placement',
    questions: 95,
    duration: '195 min',
    difficulty: 'Advanced',
    students: '6.1K'
  },
  {
    id: 4,
    name: 'GRE Mathematics Subject Test',
    type: 'Graduate Entrance',
    questions: 66,
    duration: '170 min',
    difficulty: 'Expert',
    students: '3.5K'
  },
  {
    id: 5,
    name: 'IB Higher Level Physics',
    type: 'International Baccalaureate',
    questions: 85,
    duration: '150 min',
    difficulty: 'Advanced',
    students: '2.9K'
  },
  {
    id: 6,
    name: 'MCAT Physical Sciences',
    type: 'Medical Entrance',
    questions: 59,
    duration: '95 min',
    difficulty: 'Expert',
    students: '7.3K'
  }
];

export function ExamPrepLab() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Exam Prep Lab</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Practice tests, mock exams, and comprehensive prep materials for competitive exams
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl text-[#020C35] mb-1">50+</div>
              <div className="text-gray-600">Practice Exams</div>
            </div>
            <div>
              <div className="text-3xl text-[#020C35] mb-1">5,000+</div>
              <div className="text-gray-600">Practice Questions</div>
            </div>
            <div>
              <div className="text-3xl text-[#020C35] mb-1">98%</div>
              <div className="text-gray-600">Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl text-[#020C35] mb-1">Real-Time</div>
              <div className="text-gray-600">Scoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Exams */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Available Practice Exams</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam) => (
              <Card key={exam.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#020C35] rounded-lg flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant={exam.difficulty === 'Expert' ? 'destructive' : 'default'}>
                      {exam.difficulty}
                    </Badge>
                  </div>

                  <h3 className="mb-2">{exam.name}</h3>
                  <p className="text-gray-600 mb-4">{exam.type}</p>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>{exam.questions} Questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{exam.duration} Duration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{exam.students} Students Practicing</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#020C35] hover:bg-[#020C35]/90">
                    Start Practice Test
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Exam Prep Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Timed Practice</h3>
                <p className="text-gray-600">
                  Simulate real exam conditions with accurate timing and breaks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <BarChart className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Detailed Analytics</h3>
                <p className="text-gray-600">
                  Track your performance across topics and identify weak areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Book className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Explained Solutions</h3>
                <p className="text-gray-600">
                  Every question includes detailed step-by-step explanations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Target className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Adaptive Learning</h3>
                <p className="text-gray-600">
                  AI-powered recommendations based on your performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <FileCheck className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Real Exam Format</h3>
                <p className="text-gray-600">
                  Questions mirror actual exam patterns and difficulty levels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Score Prediction</h3>
                <p className="text-gray-600">
                  Get accurate predictions of your actual exam performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#020C35] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Ace Your Exams?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start practicing today with our comprehensive exam prep materials
          </p>
          <Button size="lg" className="bg-white text-[#020C35] hover:bg-gray-100">
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}
