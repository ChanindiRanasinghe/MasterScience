import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Calendar, Clock, BookOpen, TrendingUp, Award, Video, FileText, Target } from 'lucide-react';

export function StudentDashboard() {
  const upcomingSessions = [
    { tutor: 'Dr. Emily Thompson', subject: 'Calculus', time: 'Today, 3:00 PM', duration: '60 min' },
    { tutor: 'Prof. Michael Zhang', subject: 'Quantum Physics', time: 'Tomorrow, 2:00 PM', duration: '90 min' },
    { tutor: 'Dr. Sarah Williams', subject: 'Organic Chemistry', time: 'Nov 17, 10:00 AM', duration: '60 min' }
  ];

  const recentActivity = [
    { type: 'lesson', title: 'Integration by Parts', time: '2 hours ago' },
    { type: 'cheatsheet', title: 'Physics Equations Master Sheet', time: '1 day ago' },
    { type: 'exam', title: 'AP Calculus BC Practice Test', score: 89, time: '2 days ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#020C35] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-300">Let's continue your learning journey</p>
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
                      <p className="text-sm text-gray-600">Total Hours</p>
                      <p className="text-2xl">24.5</p>
                    </div>
                    <Clock className="w-8 h-8 text-[#020C35]" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Lessons Done</p>
                      <p className="text-2xl">156</p>
                    </div>
                    <BookOpen className="w-8 h-8 text-[#020C35]" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Avg Score</p>
                      <p className="text-2xl">87%</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Achievements</p>
                      <p className="text-2xl">12</p>
                    </div>
                    <Award className="w-8 h-8 text-yellow-500" />
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
                          {session.tutor.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="mb-1">{session.subject}</h3>
                          <p className="text-sm text-gray-600">with {session.tutor}</p>
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
                      <Button className="bg-[#020C35]">
                        <Video className="w-4 h-4 mr-2" />
                        Join
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  {recentActivity.map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-[#020C35] rounded flex items-center justify-center text-white">
                        {activity.type === 'lesson' && <BookOpen className="w-5 h-5" />}
                        {activity.type === 'cheatsheet' && <FileText className="w-5 h-5" />}
                        {activity.type === 'exam' && <Target className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1">{activity.title}</h4>
                        <p className="text-sm text-gray-600">{activity.time}</p>
                      </div>
                      {activity.score && (
                        <Badge className="bg-green-600">Score: {activity.score}%</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4">Learning Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Calculus</span>
                      <span className="text-sm">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#020C35] h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Physics</span>
                      <span className="text-sm">72%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#020C35] h-2 rounded-full" style={{width: '72%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Chemistry</span>
                      <span className="text-sm">91%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#020C35] h-2 rounded-full" style={{width: '91%'}}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Study Streak */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4">Study Streak</h3>
                <div className="text-center">
                  <div className="text-5xl mb-2">🔥</div>
                  <div className="text-3xl text-[#020C35] mb-1">14 Days</div>
                  <p className="text-sm text-gray-600">Keep it up!</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button className="w-full bg-[#020C35]" variant="default">
                    Book a Session
                  </Button>
                  <Button className="w-full" variant="outline">
                    Browse Lessons
                  </Button>
                  <Button className="w-full" variant="outline">
                    Practice Test
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4">Recent Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🏆</div>
                    <div>
                      <h4 className="text-sm">Perfect Score</h4>
                      <p className="text-xs text-gray-600">Aced a practice test</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h4 className="text-sm">Fast Learner</h4>
                      <p className="text-xs text-gray-600">Completed 50 lessons</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">📚</div>
                    <div>
                      <h4 className="text-sm">Bookworm</h4>
                      <p className="text-xs text-gray-600">10 hours this week</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
