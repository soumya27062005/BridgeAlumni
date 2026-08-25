import { ArrowLeft, Search, Users, Briefcase, Calendar, MessageSquare, Star, MapPin, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import ProfileSection from "@/components/ProfileSection";

const StudentPortal = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const mentors = [
    {
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "Google",
      expertise: ["AI/ML", "Software Development", "Career Growth"],
      rating: 4.9,
      sessions: 45,
      location: "San Francisco, CA",
      available: true
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Apple",
      expertise: ["Product Strategy", "Leadership", "Tech Industry"],
      rating: 4.8,
      sessions: 32,
      location: "Cupertino, CA",
      available: true
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Meta",
      expertise: ["Data Analysis", "Machine Learning", "Research"],
      rating: 4.9,
      sessions: 28,
      location: "Menlo Park, CA",
      available: false
    }
  ];

  const jobOpportunities = [
    {
      title: "Software Engineering Intern",
      company: "TechCorp Inc.",
      location: "Remote",
      type: "Internship",
      duration: "3 months",
      posted: "2 days ago",
      description: "Join our engineering team to work on cutting-edge web applications.",
      requirements: ["React", "JavaScript", "Node.js"]
    },
    {
      title: "Product Management Intern", 
      company: "StartupXYZ",
      location: "San Francisco, CA",
      type: "Internship",
      duration: "6 months",
      posted: "1 week ago",
      description: "Help shape product strategy and work with cross-functional teams.",
      requirements: ["Analytics", "Communication", "Problem Solving"]
    },
    {
      title: "Data Analyst - Entry Level",
      company: "DataCorp",
      location: "New York, NY",
      type: "Full-time",
      duration: "Permanent",
      posted: "3 days ago",
      description: "Analyze complex datasets to drive business insights and decisions.",
      requirements: ["Python", "SQL", "Tableau"]
    }
  ];

  const upcomingEvents = [
    {
      title: "Career Fair 2024",
      date: "Dec 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus Hall",
      type: "Career",
      attendees: 150,
      registered: false
    },
    {
      title: "Alumni Tech Talk Series",
      date: "Dec 18, 2024", 
      time: "6:00 PM - 7:30 PM",
      location: "Virtual/Zoom",
      type: "Educational",
      attendees: 85,
      registered: true
    },
    {
      title: "Networking Mixer",
      date: "Jan 5, 2025",
      time: "7:00 PM - 9:00 PM", 
      location: "Alumni Center",
      type: "Networking",
      attendees: 60,
      registered: false
    }
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
              <h1 className="text-xl font-bold text-foreground">Student Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-accent text-accent-foreground">
                Current Student
              </Badge>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">AS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome, Alex Smith</h2>
          <p className="text-lg text-muted-foreground">Computer Science • 3rd Year • Connect with alumni and explore opportunities</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Mentor Sessions", value: "5", icon: Users, color: "primary" },
            { label: "Job Applications", value: "12", icon: Briefcase, color: "accent" },
            { label: "Events Attended", value: "8", icon: Calendar, color: "success" },
            { label: "Network Connections", value: "23", icon: MessageSquare, color: "secondary" }
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

        {/* Main Content Tabs */}
        <Tabs defaultValue="mentors" className="space-y-6">
          <TabsList className="bg-card shadow-custom-sm">
            <TabsTrigger value="mentors" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Find Mentors
            </TabsTrigger>
            <TabsTrigger value="opportunities" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Job Opportunities
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Events
            </TabsTrigger>
          </TabsList>

          {/* Mentors Tab */}
          <TabsContent value="mentors" className="space-y-6">
            <Card className="shadow-custom-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Available Mentors</CardTitle>
                    <CardDescription>Connect with alumni who can guide your career journey</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search by expertise..." className="pl-10 w-64" />
                    </div>
                    <Button 
                      variant="outline"
                      onClick={() => toast({
                        title: "Filtering mentors...",
                        description: "Applying filters to show relevant mentors."
                      })}
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {mentors.map((mentor, index) => (
                  <Card key={index} className={`p-6 ${mentor.available ? 'border-success/20 bg-success/5' : 'border-muted bg-muted/20'} hover:shadow-custom-md transition-shadow duration-300`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarFallback className="bg-primary-light text-primary-dark text-lg">
                            {mentor.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold text-foreground">{mentor.name}</h3>
                            <Badge variant={mentor.available ? 'default' : 'secondary'} 
                                   className={mentor.available ? 'bg-success text-success-foreground' : ''}>
                              {mentor.available ? 'Available' : 'Busy'}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-2">{mentor.role} at {mentor.company}</p>
                          <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>{mentor.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageSquare className="w-4 h-4" />
                              <span>{mentor.sessions} sessions</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{mentor.location}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {mentor.expertise.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Button 
                        className={mentor.available ? "bg-gradient-primary" : "opacity-50 cursor-not-allowed"}
                        disabled={!mentor.available}
                        onClick={() => mentor.available && toast({
                          title: "Mentorship Request Sent",
                          description: `Your mentorship request has been sent to ${mentor.name}.`
                        })}
                      >
                        {mentor.available ? 'Request Mentorship' : 'Unavailable'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Job Opportunities Tab */}
          <TabsContent value="opportunities" className="space-y-6">
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle>Job & Internship Opportunities</CardTitle>
                <CardDescription>Explore positions shared by our alumni network</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {jobOpportunities.map((job, index) => (
                  <Card key={index} className="p-6 border hover:shadow-custom-md transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                          <Badge variant={job.type === 'Internship' ? 'secondary' : 'default'} 
                                 className={job.type === 'Full-time' ? 'bg-primary text-primary-foreground' : ''}>
                            {job.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">{job.company}</p>
                        <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.duration}</span>
                          </div>
                          <span>Posted {job.posted}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, reqIndex) => (
                            <Badge key={reqIndex} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <Button 
                          className="bg-gradient-primary"
                          onClick={() => toast({
                            title: "Application Submitted",
                            description: `Your application for ${job.title} at ${job.company} has been submitted.`
                          })}
                        >
                          Apply Now
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => toast({
                            title: "Job Saved",
                            description: `${job.title} has been saved to your favorites.`
                          })}
                        >
                          Save Job
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Alumni events and networking opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className={`p-6 ${event.registered ? 'border-primary/20 bg-primary/5' : 'border'} hover:shadow-custom-md transition-shadow duration-300`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {event.type}
                          </Badge>
                          {event.registered && (
                            <Badge className="bg-success text-success-foreground text-xs">
                              Registered
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 mb-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          <Users className="w-4 h-4 inline mr-1" />
                          {event.attendees} people attending
                        </p>
                      </div>
                      <Button 
                        variant={event.registered ? "outline" : "default"}
                        className={!event.registered ? "bg-gradient-primary" : ""}
                        onClick={() => toast({
                          title: event.registered ? "Event Details" : "Registration Successful",
                          description: event.registered 
                            ? `Viewing details for ${event.title}.`
                            : `You've successfully registered for ${event.title}.`
                        })}
                      >
                        {event.registered ? 'View Details' : 'Register'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Profile Section */}
        <div className="mt-8">
          <ProfileSection userType="student" userName="Alex Smith" userRole="Student" userEmail="alex.smith@university.edu" />
        </div>
      </div>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default StudentPortal;
