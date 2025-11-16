import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Calendar, DollarSign, Users, Star, Video, Clock, TrendingUp, MessageSquare } from 'lucide-react';

export function TutorDashboard() {
  const upcomingSessions = [
    { student: 'Alex Johnson', subject: 'Calculus', time: 'Today, 3:00 PM', duration: '60 min', status: 'confirmed' },
    { student: 'Sarah Chen', subject: 'Quantum Physics', time: 'Today, 5:00 PM', duration: '90 min', status: 'confirmed' },
    { student: 'Michael Brown', subject: 'Linear Algebra', time: 'Tomorrow, 2:00 PM', duration: '60 min', status: 'pending' }
  ];

  const recentStudents = [
    { name: 'Alex Johnson', sessions: 12, progress: 85, lastSession: '2 days ago' },
    { name: 'Sarah Chen', sessions: 8, progress: 72, lastSession: '1 week ago' },
    { name: 'Michael Brown', sessions: 15, progress: 91, lastSession: 'Yesterday' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#020C35] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl mb-2">Tutor Dashboard</h1>
          <p className="text-gray-300">Welcome back, Dr. Emily Thompson</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">This Month</p>
                      <p className="text-2xl">$3,450</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Active Students</p>
                      <p className="text-2xl">45</p>
                    </div>
                    <Users className="w-8 h-8 text-[#020C35]" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Avg Rating</p>
                      <p className="text-2xl">4.9</p>
                    </div>
                    <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Hours Taught</p>
                      <p className="text-2xl">234</p>
                    </div>
                    <Clock className="w-8 h-8 text-[#020C35]" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Sessions */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl">Upcoming Sessions</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="space-y-3">
                  {upcomingSessions.map((session, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#020C35] rounded-full flex items-center justify-center text-white">
                          {session.student.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="mb-1">{session.student}</h3>
                          <p className="text-sm text-gray-600">{session.subject}</p>
                          <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {session.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {session.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={session.status === 'confirmed' ? 'default' : 'secondary'}>
                          {session.status}
                        </Badge>
                        {session.status === 'confirmed' && (
                          <Button className="bg-[#020C35]">
                            <Video className="w-4 h-4 mr-2" />
                            Start
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Student Performance */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl mb-4">Recent Students</h2>
                <div className="space-y-4">
                  {recentStudents.map((student, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#020C35] rounded-full flex items-center justify-center text-white">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h4>{student.name}</h4>
                            <p className="text-sm text-gray-600">{student.sessions} sessions • Last: {student.lastSession}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Progress</span>
                          <span className="text-sm">{student.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: `${student.progress}%`}}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Availability */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4">Availability This Week</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Available Hours</span>
                    <span className="text-green-600">32</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Booked Hours</span>
                    <span className="text-[#020C35]">18</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Open Hours</span>
                    <span className="text-gray-600">14</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Update Availability
                </Button>
              </CardContent>
            </Card>

            {/* Earnings */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4">Monthly Earnings</h3>
                <div className="text-center mb-4">
                  <div className="text-4xl text-green-600 mb-1">$3,450</div>
                  <div className="flex items-center justify-center gap-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+15% from last month</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Sessions: 46</span>
                    <span>$3,450</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Platform Fee</span>
                    <span className="text-red-600">-$345</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span>Net Earnings</span>
                    <span className="text-green-600">$3,105</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Reviews */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm">Alex Johnson</span>
                    </div>
                    <p className="text-sm text-gray-600">"Excellent explanation of complex calculus concepts!"</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm">Sarah Chen</span>
                    </div>
                    <p className="text-sm text-gray-600">"Very patient and knowledgeable tutor."</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button className="w-full bg-[#020C35]">
                    View Schedule
                  </Button>
                  <Button className="w-full" variant="outline">
                    Messages
                  </Button>
                  <Button className="w-full" variant="outline">
                    Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
