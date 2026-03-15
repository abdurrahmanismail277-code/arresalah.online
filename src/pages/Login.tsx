import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import logo from "@/assets/logo.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — will integrate with Lovable Cloud auth
    toast.info("Student login will be available once authentication is set up.");
  };

  return (
    <Layout>
      <section className="section-padding min-h-[70vh] flex items-center">
        <div className="container-max max-w-md mx-auto">
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="text-center mb-8">
              <img src={logo} alt="Logo" className="h-16 w-16 rounded-full object-cover mx-auto mb-4" />
              <h1 className="text-2xl font-semibold">Student Login</h1>
              <p className="text-sm text-muted-foreground mt-1">Sign in to access your dashboard</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Sign In
              </Button>
            </form>
            <p className="text-xs text-center text-muted-foreground mt-6">
              Don't have an account? Contact the Madrasah to enroll.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
