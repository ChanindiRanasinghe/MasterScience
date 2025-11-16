import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Star, Search, Video, Award, Clock } from 'lucide-react';

const tutors = [
  {
    id: 1,
    name: 'Dr. Deepani Silva',
    subject: 'Advanced Mathematics',
    specialties: ['Calculus', 'Linear Algebra', 'Differential Equations'],
    education: 'PhD in Mathematics – University of Colombo',
    experience: '15 years',
    rating: 4.9,
    reviews: 234,
    hourlyRate: 75,
    availability: 'Available Today',
    students: 450,
    image: 'https://images.unsplash.com/photo-1758270704587-43339a801396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjB0ZWFjaGVyfGVufDF8fHx8MTc2MzIyODk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: 'Prof. Roshan Wickrama',
    subject: 'Physics',
    specialties: ['Quantum Mechanics', 'Electromagnetism', 'Thermodynamics'],
    education: 'PhD in Physics – University of Peradeniya',
    experience: '12 years',
    rating: 5.0,
    reviews: 189,
    hourlyRate: 80,
    availability: 'Available Today',
    students: 380,
    image: 'https://images.unsplash.com/photo-1574132190990-cfd62178bb1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbGUlMjBwcm9mZXNzb3J8ZW58MXx8fHwxNzYzMjI4OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: 'Dr. Rebeka Jayasinghe',
    subject: 'Chemistry',
    specialties: ['Organic Chemistry', 'Physical Chemistry', 'Biochemistry'],
    education: 'PhD in Chemistry – University of Sri Jayewardenepura',
    experience: '10 years',
    rating: 4.8,
    reviews: 156,
    hourlyRate: 70,
    availability: 'Next Available: Tomorrow',
    students: 320,
    image: 'https://images.unsplash.com/photo-1579154392128-bf8c7ebee541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzY2llbnRpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzMTE0NjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    name: 'Dr. Amila Perera',
    subject: 'Advanced Mathematics',
    specialties: ['Abstract Algebra', 'Number Theory', 'Topology'],
    education: 'PhD in Mathematics – Stafford International University',
    experience: '18 years',
    rating: 4.9,
    reviews: 267,
    hourlyRate: 85,
    availability: 'Available Today',
    students: 510,
    image: 'https://images.unsplash.com/photo-1758270704925-fa59d93119c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdGVhY2hlciUyMGVkdWNhdG9yfGVufDF8fHx8MTc2MzIyODk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    name: 'Dr. Shehani Fonseka',
    subject: 'Physics',
    specialties: ['Classical Mechanics', 'Optics', 'Relativity'],
    education: 'PhD in Physics – University of Colombo',
    experience: '8 years',
    rating: 4.7,
    reviews: 142,
    hourlyRate: 65,
    availability: 'Available Today',
    students: 280,
    image: 'https://images.unsplash.com/photo-1630959302661-0005f0bb0b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZlbWFsZSUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NjMyMjg5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 6,
    name: 'Prof. Harsha Tennakoon',
    subject: 'Chemistry',
    specialties: ['Inorganic Chemistry', 'Analytical Chemistry', 'Materials Science'],
    education: 'PhD in Chemistry – University of Sri Jayewardenepura',
    experience: '20 years',
    rating: 5.0,
    reviews: 312,
    hourlyRate: 90,
    availability: 'Next Available: Tomorrow',
    students: 620,
    image: 'https://images.unsplash.com/photo-1758685734180-7a2f63f0e41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc29yJTIwc2NpZW50aXN0fGVufDF8fHx8MTc2MzIyODk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function TutorMarketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');

  const filteredTutors = tutors.filter(tutor => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSubject = subjectFilter === 'all' || tutor.subject === subjectFilter;
    return matchesSearch && matchesSubject;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Find Your Perfect Tutor</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse our marketplace of 500+ expert tutors specializing in advanced STEM subjects
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Filter by Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="Advanced Mathematics">Mathematics</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutors.map((tutor) => (
              <Card key={tutor.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  {/* Profile */}
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={tutor.image} 
                      alt={tutor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="mb-1">{tutor.name}</h3>
                      <p className="text-[#020C35]">{tutor.subject}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{tutor.rating}</span>
                        </div>
                        <span className="text-gray-500">({tutor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Education & Experience */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award className="w-4 h-4" />
                      <span>{tutor.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{tutor.experience} teaching experience</span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {tutor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <span>{tutor.students} students taught</span>
                    <span className="text-green-600">{tutor.availability}</span>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="text-2xl text-[#020C35]">LKR {(tutor.hourlyRate * 300).toLocaleString()}</div>
                      <div className="text-sm text-gray-500">per hour</div>
                    </div>
                    <Button className="bg-[#020C35] hover:bg-[#020C35]/90">
                      <Video className="w-4 h-4 mr-2" />
                      Book Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tutors */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Why Our Tutors Stand Out</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Rigorous Selection</h3>
                <p className="text-gray-600">
                  Only 3% of applicants become ExpertLearn tutors. All hold advanced degrees from top universities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Star className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  98% student success rate in achieving their academic goals and exam targets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Video className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Personalized Approach</h3>
                <p className="text-gray-600">
                  Each tutor customizes lessons to match your learning style and pace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
