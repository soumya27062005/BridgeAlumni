import { GraduationCap, Users, Settings, BookOpen, MessageCircle, Calendar, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const portalOptions = [
    {
      title: "Alumni Portal",
      description: "Connect, mentor, and contribute to your alma mater community",
      icon: GraduationCap,
      path: "/alumni",
      features: ["Profile Management", "Networking", "Mentorship", "Events", "Donations"],
      color: "primary"
    },
    {
      title: "Student Portal", 
      description: "Access mentorship, internships, and networking opportunities",
      icon: BookOpen,
      path: "/student",
      features: ["Find Mentors", "Job Opportunities", "Events", "Alumni Network"],
      color: "accent"
    },
    {
      title: "Admin Dashboard",
      description: "Manage alumni data, events, and institutional engagement",
      icon: Settings,
      path: "/admin", 
      features: ["Database Management", "Analytics", "Event Planning", "Reports"],
      color: "secondary"
    }
  ];

  const stats = [
    { label: "Active Alumni", value: "12,500+", icon: Users },
    { label: "Events Hosted", value: "450+", icon: Calendar },
    { label: "Mentor Sessions", value: "2,800+", icon: MessageCircle },
    { label: "Funds Raised", value: "$1.2M+", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Header */}
      <header className="bg-card border-b shadow-custom-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">AlumniConnect</h1>
                <p className="text-sm text-muted-foreground">Digital Alumni Management Platform</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Connecting Generations of
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Academic Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            A comprehensive platform that bridges alumni, students, and institutions through 
            meaningful connections, mentorship, and collaborative growth.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-custom-md hover:shadow-custom-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Selection */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Choose Your Portal</h3>
            <p className="text-lg text-muted-foreground">
              Access the tools and features designed specifically for your role
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portalOptions.map((portal, index) => (
              <Card 
                key={index} 
                className="shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => navigate(portal.path)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    portal.color === 'primary' ? 'bg-gradient-primary' :
                    portal.color === 'accent' ? 'bg-gradient-accent' : 'bg-secondary'
                  }`}>
                    <portal.icon className={`w-8 h-8 ${
                      portal.color === 'primary' ? 'text-primary-foreground' :
                      portal.color === 'accent' ? 'text-accent-foreground' : 'text-secondary-foreground'
                    }`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {portal.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {portal.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {portal.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${
                      portal.color === 'primary' ? 'bg-gradient-primary hover:bg-primary-dark' :
                      portal.color === 'accent' ? 'bg-gradient-accent hover:bg-accent' : 'bg-secondary hover:bg-secondary/80'
                    } transition-all duration-300`}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(portal.path);
                    }}
                  >
                    Access {portal.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Platform Features</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed to strengthen alumni-institution relationships and foster meaningful connections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Networking", description: "Connect with alumni worldwide" },
              { icon: MessageCircle, title: "Mentorship", description: "Guide the next generation" },
              { icon: Calendar, title: "Events", description: "Reunions and professional development" },
              { icon: TrendingUp, title: "Analytics", description: "Track engagement and growth" }
            ].map((feature, index) => (
              <Card key={index} className="text-center shadow-custom-md hover:shadow-custom-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t bg-muted">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 AlumniConnect Platform. Empowering educational communities worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
