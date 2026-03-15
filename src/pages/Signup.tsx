import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.jpg";
import maleTutor from "@/assets/male-tutor.png";
import femaleTutor from "@/assets/female-tutor.png";
import { Loader2 } from "lucide-react";

type Gender = "male" | "female" | null;

const Signup = () => {
  const [gender, setGender] = useState<Gender>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gender || !fullName.trim() || !email.trim() || !password.trim()) return;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
          data: {
            full_name: fullName.trim(),
            gender,
          },
        },
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Account created! Please check your email to verify your account.");
        navigate("/login");
      }
    } catch {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  // Step 1: Gender selection
  if (!gender) {
    return (
      <Layout>
        <section className="section-padding min-h-[70vh] flex items-center">
          <div className="container-max max-w-lg mx-auto">
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="text-center mb-8">
                <img src={logo} alt="Logo" className="h-16 w-16 rounded-full object-cover mx-auto mb-4" />
                <h1 className="text-2xl font-semibold">Create Account</h1>
                <p className="text-sm text-muted-foreground mt-1">Select your category to get started</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <button
                  onClick={() => setGender("male")}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-border bg-background hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <div className="w-28 h-32 rounded-lg overflow-hidden bg-muted">
                    <img src={maleTutor} alt="Male student" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                    Male (Brothers)
                  </span>
                </button>

                <button
                  onClick={() => setGender("female")}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-border bg-background hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <div className="w-28 h-32 rounded-lg overflow-hidden bg-muted">
                    <img src={femaleTutor} alt="Female student" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                    Female (Sisters)
                  </span>
                </button>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-6">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">Sign In</Link>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Step 2: Registration form
  return (
    <Layout>
      <section className="section-padding min-h-[70vh] flex items-center">
        <div className="container-max max-w-md mx-auto">
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="text-center mb-6">
              <img src={logo} alt="Logo" className="h-14 w-14 rounded-full object-cover mx-auto mb-3" />
              <h1 className="text-2xl font-semibold">
                {gender === "male" ? "Brothers" : "Sisters"} Registration
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Fill in your details to create an account</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="mt-1"
                  disabled={loading}
                />
              </div>
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
                  disabled={loading}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Min. 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="mt-1"
                  disabled={loading}
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : null}
                Create Account
              </Button>
            </form>

            <div className="flex items-center justify-between mt-4">
              <Button variant="ghost" size="sm" onClick={() => setGender(null)} disabled={loading}>
                ← Change category
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
