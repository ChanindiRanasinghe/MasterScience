import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '10 Proven Strategies to Master Calculus in 2025',
    excerpt: 'Learn the most effective techniques used by top students to excel in advanced calculus courses...',
    category: 'Study Tips',
    author: 'Dr. Emily Thompson',
    date: 'Nov 10, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop'
  },
  {
    id: 2,
    title: 'Understanding Quantum Mechanics: A Beginner\'s Guide',
    excerpt: 'Demystifying the fundamental concepts of quantum mechanics for advanced physics students...',
    category: 'Physics',
    author: 'Prof. Michael Zhang',
    date: 'Nov 8, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&h=450&fit=crop'
  },
  {
    id: 3,
    title: 'Organic Chemistry Made Simple: Reaction Mechanisms Explained',
    excerpt: 'Breaking down complex organic chemistry reactions into understandable steps...',
    category: 'Chemistry',
    author: 'Dr. Sarah Williams',
    date: 'Nov 5, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&h=450&fit=crop'
  },
  {
    id: 4,
    title: 'How to Prepare for the AP Calculus BC Exam',
    excerpt: 'Comprehensive guide to acing the AP Calculus BC exam with expert tips and practice strategies...',
    category: 'Exam Prep',
    author: 'Dr. James Rodriguez',
    date: 'Nov 3, 2025',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop'
  },
  {
    id: 5,
    title: 'Linear Algebra Applications in Machine Learning',
    excerpt: 'Discover how linear algebra concepts power modern machine learning algorithms...',
    category: 'Mathematics',
    author: 'Dr. Lisa Chen',
    date: 'Nov 1, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop'
  },
  {
    id: 6,
    title: 'The Science of Effective Study Sessions',
    excerpt: 'Evidence-based techniques to maximize learning retention and minimize study time...',
    category: 'Study Tips',
    author: 'Dr. Emily Thompson',
    date: 'Oct 28, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop'
  }
];

const categories = ['All', 'Study Tips', 'Mathematics', 'Physics', 'Chemistry', 'Exam Prep'];

export function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">ExpertLearn Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Expert insights, study tips, and educational resources for advanced STEM students
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search articles..."
              className="pl-12 py-6 bg-white text-black"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="hover:bg-[#020C35] hover:text-white"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-6">Featured Article</h2>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-6">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <CardContent className="pt-6 flex flex-col justify-center">
                <Badge className="mb-3 w-fit bg-[#020C35]">{blogPosts[0].category}</Badge>
                <h2 className="text-3xl mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button className="bg-[#020C35] w-fit">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="pt-6">
                  <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex flex-col gap-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 text-[#020C35]">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-[#020C35] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get weekly study tips, exam strategies, and educational insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-white text-black"
            />
            <Button className="bg-white text-[#020C35] hover:bg-gray-100 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Calculus Tips', 'Physics Problems', 'Chemistry Basics', 'Study Techniques', 'Exam Strategies', 'Math Olympiad', 'Science Research', 'College Prep'].map((topic) => (
              <Card key={topic} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <h3 className="mb-2">{topic}</h3>
                  <p className="text-sm text-gray-600">24 articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
