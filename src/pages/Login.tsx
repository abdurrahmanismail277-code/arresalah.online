import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.jpg";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Loader2, ArrowLeft } from "lucide-react";

type Step = "credentials" | "otp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [step, setStep] = useState<Step>("credentials");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;

    setLoading(true);
    try {
      // First, sign in with password to verify credentials
      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        toast.error(error.message);
        setLoading(false);
        return;
      }

      // Sign out immediately — we need OTP verification first
      await supabase.auth.signOut();

      // Send OTP to the user's email
      const { error: otpError } = await supabase.auth.signInWithOtp({ email });

      if (otpError) {
        toast.error("Failed to send verification code. Please try again.");
        setLoading(false);
        return;
      }

      toast.success("A 6-digit verification code has been sent to your email.");
      setStep("otp");
    } catch {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode.length !== 6) return;

    setLoading(true);
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otpCode,
        type: "email",
      });

      if (error) {
        toast.error("Invalid or expired code. Please try again.");
        setLoading(false);
        return;
      }

      toast.success("Login successful!");
      navigate("/dashboard");
    } catch {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      toast.error("Failed to resend code.");
    } else {
      toast.success("A new code has been sent to your email.");
    }
    setLoading(false);
  };

  return (
    <Layout>
      <section className="section-padding min-h-[70vh] flex items-center">
        <div className="container-max max-w-md mx-auto">
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="text-center mb-8">
              <img src={logo} alt="Logo" className="h-16 w-16 rounded-full object-cover mx-auto mb-4" />
              <h1 className="text-2xl font-semibold">Student Login</h1>
              <p className="text-sm text-muted-foreground mt-1">
                {step === "credentials"
                  ? "Sign in to access your dashboard"
                  : "Enter the 6-digit code sent to your email"}
              </p>
            </div>

            {step === "credentials" ? (
              <form onSubmit={handleCredentialsSubmit} className="space-y-4">
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
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1"
                    disabled={loading}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : null}
                  Continue
                </Button>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit} className="space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <InputOTP maxLength={6} value={otpCode} onChange={setOtpCode} disabled={loading}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  <p className="text-xs text-muted-foreground">
                    Check your inbox at <span className="font-medium text-foreground">{email}</span>
                  </p>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading || otpCode.length !== 6}>
                  {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : null}
                  Verify & Sign In
                </Button>
                <div className="flex items-center justify-between">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => { setStep("credentials"); setOtpCode(""); }}
                    disabled={loading}
                  >
                    <ArrowLeft size={14} className="mr-1" /> Back
                  </Button>
                  <Button type="button" variant="link" size="sm" onClick={handleResendOtp} disabled={loading}>
                    Resend Code
                  </Button>
                </div>
              </form>
            )}

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
