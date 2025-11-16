import { Card, CardContent } from '../components/ui/card';
import { Target, Eye, Award, Users, Globe, Heart } from 'lucide-react';

export function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">About Master Science</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering students worldwide with world-class education in advanced mathematics, science, physics, and chemistry
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-[#020C35] mb-4" />
                <h2 className="text-3xl mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg">
                  To provide accessible, high-quality advanced STEM education through expert tutoring and comprehensive learning resources. We believe every motivated student deserves access to world-class instruction, regardless of their location or background.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Eye className="w-12 h-12 text-[#020C35] mb-4" />
                <h2 className="text-3xl mb-4">Our Vision</h2>
                <p className="text-gray-600 text-lg">
                  To become the world's leading platform for advanced STEM education, nurturing the next generation of scientists, engineers, and innovators who will solve tomorrow's greatest challenges.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Story */}
          <div className="mb-16">
            <h2 className="text-4xl mb-6 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2018 by a group of MIT and Stanford graduates, ExpertLearn was born from a simple observation: exceptional students in remote areas often lacked access to the specialized tutoring needed to reach their full potential.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                What started as a small tutoring service has grown into a comprehensive learning platform serving over 10,000 students across 50 countries. Our team of 500+ expert tutors includes PhD holders, university professors, and industry professionals who are passionate about education.
              </p>
              <p className="text-lg text-gray-600">
                Today, ExpertLearn offers not just tutoring, but a complete ecosystem of learning resources including micro-lessons, cheat sheets, exam preparation materials, and interactive virtual classrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We maintain the highest standards in tutor selection, content quality, and student support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Accessibility</h3>
                <p className="text-gray-600">
                  Quality education should be available to motivated students everywhere, not just in major cities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Heart className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Passion</h3>
                <p className="text-gray-600">
                  Our tutors are passionate educators who genuinely care about student success.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Globe className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly evolve our platform with cutting-edge educational technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Target className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Results-Driven</h3>
                <p className="text-gray-600">
                  We measure success by student outcomes and continuously optimize our approach.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="text-2xl mb-3">Community</h3>
                <p className="text-gray-600">
                  We foster a supportive learning community where students and tutors grow together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl text-[#020C35] mb-2">10,000+</div>
              <div className="text-xl text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-5xl text-[#020C35] mb-2">500+</div>
              <div className="text-xl text-gray-600">Expert Tutors</div>
            </div>
            <div>
              <div className="text-5xl text-[#020C35] mb-2">50+</div>
              <div className="text-xl text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-5xl text-[#020C35] mb-2">98%</div>
              <div className="text-xl text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-[#020C35] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                name: 'Dr. H.M. Perera', 
                role: 'CEO & Co-Founder', 
                education: 'PhD in Physics, University of Colombo',
                image: 'https://images.unsplash.com/photo-1631203882303-30634a9528d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc2NpZW50aXN0JTIwcmVzZWFyY2hlcnxlbnwxfHx8fDE3NjMyMjg5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              { 
                name: 'Dr. Nimal Dissanayake', 
                role: 'Chief Academic Officer', 
                education: 'PhD in Mathematics, University of Sri Jayewardenepura',
                image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBjZW8lMjBleGVjdXRpdmV8ZW58MXx8fHwxNzYzMjI4OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              { 
                name: 'Prof. S. Priyan', 
                role: 'Head of Curriculum', 
                education: 'PhD in Chemistry, University of Peradeniya',
                image: 'https://images.unsplash.com/photo-1618593706014-06782cd3bb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdGVjaCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMyMjg5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              { 
                name: 'Vijitha Fernando', 
                role: 'Chief Technology Officer', 
                education: 'MSc in Computer Science, University of Moratuwa',
                image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB0ZWNobm9sb2d5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzIyODk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              }
            ].map((member, idx) => (
              <Card key={idx} className="bg-white text-black">
                <CardContent className="pt-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-[#020C35] mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.education}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
