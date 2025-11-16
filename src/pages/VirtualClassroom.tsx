import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Video, Users, Share2, MessageSquare, Presentation, FileText, Monitor, Mic } from 'lucide-react';

export function VirtualClassroom() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl mb-6">Virtual Classroom</h1>
              <p className="text-xl text-gray-300 mb-8">
                Interactive online learning environment with HD video, digital whiteboard, screen sharing, and real-time collaboration tools.
              </p>
              <Button size="lg" className="bg-white text-[#020C35] hover:bg-gray-100">
                Join a Session
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-16 h-16 text-white/50" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="aspect-video bg-white/5 rounded"></div>
                <div className="aspect-video bg-white/5 rounded"></div>
                <div className="aspect-video bg-white/5 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Classroom Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Video className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="mb-2">HD Video</h3>
                <p className="text-gray-600">
                  Crystal clear 1080p video conferencing with low latency
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Presentation className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="mb-2">Digital Whiteboard</h3>
                <p className="text-gray-600">
                  Interactive whiteboard with math equation support
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Share2 className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="mb-2">Screen Sharing</h3>
                <p className="text-gray-600">
                  Share your screen or application window instantly
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <MessageSquare className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="mb-2">Live Chat</h3>
                <p className="text-gray-600">
                  Real-time messaging for questions and discussions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <FileText className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="mb-2">File Sharing</h3>
                <p className="text-gray-600">
                  Share documents, PDFs, and problem sets easily
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Monitor className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="mb-2">Session Recording</h3>
                <p className="text-gray-600">
                  Automatic recording for later review and study
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Mic className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="mb-2">Audio Quality</h3>
                <p className="text-gray-600">
                  Noise cancellation and echo suppression
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="mb-2">Group Sessions</h3>
                <p className="text-gray-600">
                  Support for one-on-one or group learning
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Whiteboard Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Advanced Whiteboard Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-4">Mathematical Notation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• LaTeX equation editor built-in</li>
                  <li>• Common symbols and formulas library</li>
                  <li>• Graphing calculator integration</li>
                  <li>• Geometry tools (compass, protractor)</li>
                  <li>• 3D visualization support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-4">Collaboration Tools</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multi-user simultaneous drawing</li>
                  <li>• Infinite canvas with zoom</li>
                  <li>• Multiple page support</li>
                  <li>• Undo/redo for all participants</li>
                  <li>• Export boards as PDF or images</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Technical Requirements</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-4">Recommended</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• High-speed internet (5+ Mbps)</li>
                  <li>• Webcam (720p or higher)</li>
                  <li>• Headset with microphone</li>
                  <li>• Modern browser (Chrome, Firefox, Safari)</li>
                  <li>• Desktop or laptop computer</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-4">Supported Devices</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Windows 10 or later</li>
                  <li>• macOS 10.14 or later</li>
                  <li>• iPad (iOS 13+)</li>
                  <li>• Android tablets (Android 9+)</li>
                  <li>• Linux (Ubuntu, Fedora)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-4">Security</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• End-to-end encryption</li>
                  <li>• Password-protected rooms</li>
                  <li>• Waiting room feature</li>
                  <li>• Host controls and moderation</li>
                  <li>• GDPR compliant</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-[#020C35] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-[#020C35] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl mb-2">Book a Session</h3>
              <p className="text-gray-300">
                Schedule with your tutor at a convenient time
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white text-[#020C35] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl mb-2">Join the Room</h3>
              <p className="text-gray-300">
                Click the session link - no downloads required
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white text-[#020C35] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl mb-2">Interactive Learning</h3>
              <p className="text-gray-300">
                Engage with whiteboard, video, and collaboration tools
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white text-[#020C35] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl mb-2">Review & Practice</h3>
              <p className="text-gray-300">
                Access recorded sessions and materials anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Experience the Future of Learning</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students learning in our state-of-the-art virtual classrooms
          </p>
          <Button size="lg" className="bg-[#020C35] hover:bg-[#020C35]/90">
            Try a Free Demo Session
          </Button>
        </div>
      </section>
    </div>
  );
}
