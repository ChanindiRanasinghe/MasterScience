import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Play, Clock, Search, BookOpen } from 'lucide-react';

const lessons = [
  {
    id: 1,
    title: 'Integration by Parts',
    subject: 'Calculus',
    duration: '8 min',
    level: 'Advanced',
    views: '12.5K',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop'
  },
  {
    id: 2,
    title: 'Maxwell\'s Equations Explained',
    subject: 'Physics',
    duration: '12 min',
    level: 'Advanced',
    views: '18.2K',
    thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=225&fit=crop'
  },
  {
    id: 3,
    title: 'Organic Reaction Mechanisms',
    subject: 'Chemistry',
    duration: '15 min',
    level: 'Advanced',
    views: '9.8K',
    thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=225&fit=crop'
  },
  {
    id: 4,
    title: 'Eigenvalues and Eigenvectors',
    subject: 'Linear Algebra',
    duration: '10 min',
    level: 'Advanced',
    views: '15.3K',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop'
  },
  {
    id: 5,
    title: 'Quantum Tunneling Phenomenon',
    subject: 'Quantum Physics',
    duration: '14 min',
    level: 'Advanced',
    views: '11.7K',
    thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=225&fit=crop'
  },
  {
    id: 6,
    title: 'Thermodynamic Cycles',
    subject: 'Thermodynamics',
    duration: '11 min',
    level: 'Advanced',
    views: '8.9K',
    thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=225&fit=crop'
  },
  {
    id: 7,
    title: 'Differential Equations Solutions',
    subject: 'Calculus',
    duration: '13 min',
    level: 'Advanced',
    views: '14.2K',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop'
  },
  {
    id: 8,
    title: 'Wave-Particle Duality',
    subject: 'Physics',
    duration: '9 min',
    level: 'Advanced',
    views: '16.5K',
    thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=225&fit=crop'
  },
  {
    id: 9,
    title: 'Electrochemistry Fundamentals',
    subject: 'Chemistry',
    duration: '12 min',
    level: 'Advanced',
    views: '10.3K',
    thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=225&fit=crop'
  }
];

const categories = ['All', 'Calculus', 'Physics', 'Chemistry', 'Linear Algebra', 'Quantum Physics', 'Thermodynamics'];

export function MicroLessonLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || lesson.subject === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Micro-Lesson Library</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bite-sized video lessons on specific topics. Learn complex concepts in 5-15 minutes.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl text-[#020C35] mb-1">2,500+</div>
              <div className="text-gray-600">Video Lessons</div>
            </div>
            <div>
              <div className="text-3xl text-[#020C35] mb-1">50+</div>
              <div className="text-gray-600">Topics Covered</div>
            </div>
            <div>
              <div className="text-3xl text-[#020C35] mb-1">5-15</div>
              <div className="text-gray-600">Minutes Each</div>
            </div>
            <div>
              <div className="text-3xl text-[#020C35] mb-1">HD</div>
              <div className="text-gray-600">Quality Videos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search lessons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-[#020C35]' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLessons.map((lesson) => (
              <Card key={lesson.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={lesson.thumbnail} 
                    alt={lesson.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-[#020C35] ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-black/70 text-white">
                      <Clock className="w-3 h-3 mr-1" />
                      {lesson.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <Badge variant="secondary" className="mb-2">{lesson.subject}</Badge>
                  <h3 className="mb-2">{lesson.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{lesson.views} views</span>
                    <Badge variant="outline">{lesson.level}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#020C35] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Why Micro-Lessons Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white text-black">
              <CardContent className="pt-6 text-center">
                <Clock className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Time-Efficient</h3>
                <p className="text-gray-600">
                  Learn complex topics in just 5-15 minutes. Perfect for busy students.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-black">
              <CardContent className="pt-6 text-center">
                <BookOpen className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Focused Learning</h3>
                <p className="text-gray-600">
                  Each lesson covers one specific concept in depth for maximum retention.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-black">
              <CardContent className="pt-6 text-center">
                <Play className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Watch Anytime</h3>
                <p className="text-gray-600">
                  Access lessons 24/7 and watch at your own pace. Replay as needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
