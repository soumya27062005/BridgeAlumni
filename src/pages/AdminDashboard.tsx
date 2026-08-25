import { ArrowLeft, Users, Calendar, TrendingUp, BarChart3, Building, Mail, Phone, MapPin, DollarSign, Download, Search, Filter, Eye, Edit, Trash2, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import AnalyticsCharts from "@/components/AnalyticsCharts";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import ProfileSection from "@/components/ProfileSection";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const overviewStats = [
    { label: "Total Alumni", value: "12,547", change: "+5.2%", trend: "up", icon: Users },
    { label: "Active Members", value: "8,932", change: "+12.1%", trend: "up", icon: TrendingUp },
    { label: "Events This Month", value: "24", change: "-2.3%", trend: "down", icon: Calendar },
    { label: "Total Donations", value: "$1.2M", change: "+18.7%", trend: "up", icon: DollarSign }
  ];

  const recentAlumni = [
    { id: 1, name: "Sarah Johnson", email: "sarah.j@email.com", batch: "2020", department: "Computer Science", status: "active" },
    { id: 2, name: "Michael Chen", email: "m.chen@email.com", batch: "2019", department: "Business Admin", status: "active" },
    { id: 3, name: "Emily Rodriguez", email: "e.rodriguez@email.com", batch: "2021", department: "Engineering", status: "pending" },
    { id: 4, name: "David Kim", email: "david.kim@email.com", batch: "2018", department: "Medicine", status: "active" },
    { id: 5, name: "Lisa Wang", email: "lisa.w@email.com", batch: "2022", department: "Arts & Science", status: "inactive" }
  ];

  const upcomingEvents = [
    { id: 1, title: "Annual Alumni Gala", date: "2024-12-15", attendees: 250, status: "confirmed" },
    { id: 2, title: "Tech Industry Meetup", date: "2024-12-20", attendees: 80, status: "planning" },
    { id: 3, title: "Class of 2010 Reunion", date: "2025-01-10", attendees: 120, status: "confirmed" },
    { id: 4, title: "Career Fair 2025", date: "2025-02-05", attendees: 300, status: "planning" }
  ];

  const donationCampaigns = [
    { name: "New Library Fund", target: 500000, raised: 375000, percentage: 75, donors: 234 },
    { name: "Scholarship Program", target: 200000, raised: 145000, percentage: 72, donors: 156 },
    { name: "Research Grant", target: 300000, raised: 120000, percentage: 40, donors: 89 },
    { name: "Campus Renovation", target: 1000000, raised: 680000, percentage: 68, donors: 445 }
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
              <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button className="bg-gradient-primary">
                <Calendar className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Overview Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => (
            <Card key={index} className="shadow-custom-md hover:shadow-custom-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-8 h-8 text-primary" />
                  <Badge variant={stat.trend === 'up' ? 'default' : 'destructive'} className={stat.trend === 'up' ? 'bg-success text-success-foreground' : ''}>
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="alumni" className="space-y-6">
          <TabsList className="bg-card shadow-custom-sm">
            <TabsTrigger value="alumni" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Alumni Database
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Event Management
            </TabsTrigger>
            <TabsTrigger value="donations" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Fundraising
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Alumni Database Tab */}
          <TabsContent value="alumni" className="space-y-6">
            <Card className="shadow-custom-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Alumni Database</CardTitle>
                    <CardDescription>Manage and view all registered alumni members</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search alumni..." className="pl-10 w-64" />
                    </div>
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Batch</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentAlumni.map((alumni) => (
                      <TableRow key={alumni.id} className="hover:bg-secondary/50">
                        <TableCell className="font-medium">{alumni.name}</TableCell>
                        <TableCell className="text-muted-foreground">{alumni.email}</TableCell>
                        <TableCell>{alumni.batch}</TableCell>
                        <TableCell>{alumni.department}</TableCell>
                        <TableCell>
                          <Badge variant={
                            alumni.status === 'active' ? 'default' : 
                            alumni.status === 'pending' ? 'secondary' : 
                            'destructive'
                          } className={alumni.status === 'active' ? 'bg-success text-success-foreground' : ''}>
                            {alumni.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                Edit Details
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Remove
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Event Management Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle>Event Management</CardTitle>
                <CardDescription>Create, manage, and track alumni events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 bg-secondary rounded-xl border hover:shadow-custom-md transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <span>Date: {new Date(event.date).toLocaleDateString()}</span>
                          <span>Attendees: {event.attendees}</span>
                          <Badge variant={event.status === 'confirmed' ? 'default' : 'secondary'} 
                                 className={event.status === 'confirmed' ? 'bg-success text-success-foreground' : ''}>
                            {event.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fundraising Tab */}
          <TabsContent value="donations" className="space-y-6">
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle>Active Campaigns</CardTitle>
                <CardDescription>Monitor fundraising progress and donation campaigns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {donationCampaigns.map((campaign, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-xl border">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">{campaign.name}</h4>
                      <span className="text-sm text-muted-foreground">{campaign.donors} donors</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          ${campaign.raised.toLocaleString()} raised of ${campaign.target.toLocaleString()} goal
                        </span>
                        <span className="font-medium text-foreground">{campaign.percentage}%</span>
                      </div>
                      <Progress value={campaign.percentage} className="h-3" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <AnalyticsCharts />
          </TabsContent>
        </Tabs>
        
        {/* Profile Section */}
        <div className="mt-8">
          <ProfileSection userType="admin" userName="Admin User" userRole="System Administrator" userEmail="admin@university.edu" />
        </div>
      </div>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default AdminDashboard;
