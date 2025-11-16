import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Download, Search, FileText, Star } from 'lucide-react';

const cheatSheets = [
  {
    id: 1,
    title: 'Calculus Formulas Complete Reference',
    subject: 'Calculus',
    pages: 4,
    downloads: '25.3K',
    rating: 4.9,
    topics: ['Derivatives', 'Integrals', 'Series', 'Limits']
  },
  {
    id: 2,
    title: 'Physics Equations Master Sheet',
    subject: 'Physics',
    pages: 6,
    downloads: '32.1K',
    rating: 5.0,
    topics: ['Mechanics', 'Electromagnetism', 'Thermodynamics', 'Optics']
  },
  {
    id: 3,
    title: 'Organic Chemistry Reactions Map',
    subject: 'Chemistry',
    pages: 8,
    downloads: '18.7K',
    rating: 4.8,
    topics: ['Reactions', 'Mechanisms', 'Functional Groups', 'Synthesis']
  },
  {
    id: 4,
    title: 'Linear Algebra Quick Reference',
    subject: 'Linear Algebra',
    pages: 3,
    downloads: '21.5K',
    rating: 4.9,
    topics: ['Matrices', 'Vectors', 'Eigenvalues', 'Transformations']
  },
  {
    id: 5,
    title: 'Quantum Mechanics Essentials',
    subject: 'Physics',
    pages: 5,
    downloads: '15.2K',
    rating: 4.7,
    topics: ['Wave Functions', 'Operators', 'Postulates', 'Applications']
  },
  {
    id: 6,
    title: 'Thermodynamics Laws & Formulas',
    subject: 'Thermodynamics',
    pages: 4,
    downloads: '19.8K',
    rating: 4.8,
    topics: ['Laws', 'Cycles', 'Entropy', 'Energy']
  },
  {
    id: 7,
    title: 'Differential Equations Guide',
    subject: 'Calculus',
    pages: 5,
    downloads: '22.4K',
    rating: 4.9,
    topics: ['ODEs', 'PDEs', 'Solutions', 'Methods']
  },
  {
    id: 8,
    title: 'Inorganic Chemistry Periodic Trends',
    subject: 'Chemistry',
    pages: 3,
    downloads: '16.9K',
    rating: 4.6,
    topics: ['Periodic Table', 'Bonding', 'Properties', 'Reactions']
  },
  {
    id: 9,
    title: 'Vector Calculus Summary',
    subject: 'Calculus',
    pages: 4,
    downloads: '20.1K',
    rating: 4.8,
    topics: ['Gradients', 'Divergence', 'Curl', 'Theorems']
  }
];

const categories = ['All', 'Calculus', 'Physics', 'Chemistry', 'Linear Algebra', 'Thermodynamics'];

export function CheatSheetLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSheets = cheatSheets.filter(sheet => {
    const matchesSearch = sheet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sheet.topics.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || sheet.subject === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Cheat Sheet Library</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quick reference guides and formula sheets for rapid revision. Download and print for exam prep.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl text-[#020C35] mb-1">500+</div>
              <div className="text-gray-600">Cheat Sheets</div>
            </div>
            <div>
              <div className="text-3xl text-[#020C35] mb-1">100K+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
            <div>
              <div className="text-3xl text-[#020C35] mb-1">PDF</div>
              <div className="text-gray-600">High Quality</div>
            </div>
            <div>
              <div className="text-3xl text-[#020C35] mb-1">Free</div>
              <div className="text-gray-600">For Members</div>
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
              placeholder="Search cheat sheets..."
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

      {/* Cheat Sheets Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSheets.map((sheet) => (
              <Card key={sheet.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#020C35] rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>

                  {/* Title and Subject */}
                  <Badge variant="secondary" className="mb-2">{sheet.subject}</Badge>
                  <h3 className="mb-3">{sheet.title}</h3>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {sheet.topics.map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <span>{sheet.pages} pages</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{sheet.rating}</span>
                    </div>
                    <span>{sheet.downloads} downloads</span>
                  </div>

                  {/* Download Button */}
                  <Button className="w-full bg-[#020C35] hover:bg-[#020C35]/90">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-[#020C35] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Cheat Sheet Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white text-black">
              <CardContent className="pt-6 text-center">
                <FileText className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Comprehensive</h3>
                <p className="text-gray-600">
                  All essential formulas, equations, and concepts in one place.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-black">
              <CardContent className="pt-6 text-center">
                <Download className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Print-Ready</h3>
                <p className="text-gray-600">
                  High-quality PDFs optimized for printing and studying offline.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-black">
              <CardContent className="pt-6 text-center">
                <Star className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Expert Created</h3>
                <p className="text-gray-600">
                  Developed by PhD educators and verified for accuracy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
