import { useState } from "react";
import { Eye, EyeOff, GraduationCap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "alumni"
  });

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sign In Successful",
      description: `Welcome back! Redirecting to ${formData.userType} dashboard...`,
    });
    
    // Simulate sign in and redirect based on user type
    setTimeout(() => {
      switch(formData.userType) {
        case 'alumni':
          navigate('/alumni');
          break;
        case 'student':
          navigate('/student');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/');
      }
    }, 1500);
  };

  const handleOAuthSignIn = (provider: string) => {
    toast({
      title: `${provider} Sign In`,
      description: `Connecting with ${provider}...`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <Card className="w-full max-w-md shadow-custom-xl relative z-10">
        <CardHeader className="text-center space-y-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/")}
            className="absolute left-4 top-4 hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl text-foreground">Welcome Back</CardTitle>
          <CardDescription>Sign in to your AlumniConnect account</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <Tabs value={formData.userType} onValueChange={(value) => setFormData({...formData, userType: value})}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="alumni">Alumni</TabsTrigger>
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>

            <TabsContent value={formData.userType} className="space-y-4 mt-6">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input 
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Forgot password?
                  </Button>
                </div>

                <Button type="submit" className="w-full bg-gradient-primary">
                  Sign In as {formData.userType.charAt(0).toUpperCase() + formData.userType.slice(1)}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => handleOAuthSignIn("Google")}
                  className="w-full"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleOAuthSignIn("LinkedIn")}
                  className="w-full"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Button variant="link" className="p-0 h-auto text-primary">
                  Sign up here
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
