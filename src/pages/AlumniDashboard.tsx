import { ArrowLeft, Bell, Calendar, Heart, MessageSquare, Users, MapPin, Briefcase, Award, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

const AlumniDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const notifications = [
    { type: "mentorship", message: "New mentorship request from Sarah Chen", time: "2 hours ago", unread: true },
    { type: "event", message: "Alumni Tech Summit 2024 - Register now", time: "1 day ago", unread: true },
    { type: "network", message: "5 new alumni joined in your region", time: "2 days ago", unread: false }
  ];

  const upcomingEvents = [
    { title: "Alumni Tech Summit 2024", date: "Dec 15, 2024", location: "San Francisco", attendees: 150 },
    { title: "Virtual Networking Hour", date: "Dec 20, 2024", location: "Online", attendees: 75 },
    { title: "Class of 2010 Reunion", date: "Jan 10, 2025", location: "Campus", attendees: 85 }
  ];

  const mentorshipRequests = [
    { name: "Sarah Chen", program: "Computer Science", year: "2nd Year", topic: "AI/ML Career Path" },
    { name: "Alex Rodriguez", program: "Business Administration", year: "3rd Year", topic: "Startup Guidance" },
    { name: "Maya Patel", program: "Engineering", year: "1st Year", topic: "Industry Insights" }
  ];

  const networkSuggestions = [
    { name: "John Smith", role: "Senior Software Engineer", company: "Google", location: "Mountain View" },
    { name: "Lisa Johnson", role: "Product Manager", company: "Apple", location: "Cupertino" },
    { name: "David Kim", role: "Data Scientist", company: "Meta", location: "Menlo Park" }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Header */}
      <header className="bg-card border-b shadow-custom-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/")}
                className="hover:bg-secondary"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-xl font-bold text-foreground">Alumni Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-[10px] p-0 flex items-center justify-center">
                  3
                </Badge>
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, John Doe</h2>
          <p className="text-lg text-muted-foreground">Class of 2015 • Computer Science • San Francisco, CA</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "Mentorship Sessions", value: "12", icon: Users, color: "primary" },
                { label: "Events Attended", value: "8", icon: Calendar, color: "accent" },
                { label: "Contributions", value: "$2,500", icon: Heart, color: "success" },
                { label: "Network Size", value: "156", icon: MessageSquare, color: "secondary" }
              ].map((stat, index) => (
                <Card key={index} className="shadow-custom-md hover:shadow-custom-lg transition-shadow duration-300">
                  <CardContent className="p-4 text-center">
                    <stat.icon className={`w-8 h-8 mx-auto mb-2 ${
                      stat.color === 'primary' ? 'text-primary' :
                      stat.color === 'accent' ? 'text-accent' :
                      stat.color === 'success' ? 'text-success' : 'text-secondary-foreground'
                    }`} />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mentorship Requests */}
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Mentorship Requests</span>
                  <Badge className="bg-accent text-accent-foreground">{mentorshipRequests.length}</Badge>
                </CardTitle>
                <CardDescription>Students seeking your guidance and expertise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mentorshipRequests.map((request, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-xl border hover:shadow-custom-md transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-primary-light text-primary-dark text-sm">
                            {request.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-foreground">{request.name}</h4>
                          <p className="text-sm text-muted-foreground">{request.program} • {request.year}</p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-gradient-primary"
                        onClick={() => toast({
                          title: "Mentorship Request Accepted",
                          description: `You've accepted ${request.name}'s mentorship request for ${request.topic}.`
                        })}
                      >
                        Accept
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Topic:</span> {request.topic}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Upcoming Events</span>
                </CardTitle>
                <CardDescription>Alumni events and networking opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-4 bg-gradient-secondary rounded-xl border hover:shadow-custom-md transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{event.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{event.attendees} attending</span>
                          </span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => toast({
                          title: "RSVP Confirmed",
                          description: `You've successfully registered for ${event.title}.`
                        })}
                      >
                        RSVP
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <Card className="shadow-custom-lg">
              <CardHeader className="text-center pb-4">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">JD</AvatarFallback>
                </Avatar>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>Senior Software Engineer at Google</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span>Computer Science, Class of 2015</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  <span>Google • 5 years</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => navigate("/edit-profile")}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle className="text-base">Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${notification.unread ? 'bg-primary-light border-primary' : 'bg-secondary'}`}>
                    <p className="text-sm text-foreground mb-1">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Network Suggestions */}
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle className="text-base">Connect with Alumni</CardTitle>
                <CardDescription className="text-sm">In your area and industry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {networkSuggestions.map((person, index) => (
                  <div key={index} className="p-3 bg-secondary rounded-lg border">
                    <div className="flex items-center space-x-3 mb-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary-light text-primary-dark text-xs">
                          {person.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-sm text-foreground truncate">{person.name}</h5>
                        <p className="text-xs text-muted-foreground truncate">{person.role} at {person.company}</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => toast({
                        title: "Connection Request Sent",
                        description: `Connection request sent to ${person.name}.`
                      })}
                    >
                      Connect
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default AlumniDashboard;
