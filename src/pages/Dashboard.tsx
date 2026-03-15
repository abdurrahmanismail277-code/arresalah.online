import Layout from "@/components/Layout";
import { BookOpen, Calendar, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const mockData = {
  courses: [
    { name: "Adult Quran Class", status: "Active" },
  ],
  schedule: [
    { day: "Monday", time: "5:00 PM - 6:00 PM" },
    { day: "Wednesday", time: "5:00 PM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 11:00 AM" },
  ],
  teacher: "Ustadh AbdulRahman",
};

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  const displayName = user?.email?.split("@")[0] ?? "Student";

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl">Welcome, {displayName}</h1>
              <p className="text-muted-foreground">Your student dashboard</p>
            </div>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut size={16} className="mr-2" /> Sign Out
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold">My Courses</h3>
              </div>
              {mockData.courses.map((c) => (
                <div key={c.name} className="flex items-center justify-between text-sm">
                  <span>{c.name}</span>
                  <span className="bg-gold/20 text-gold px-2 py-0.5 rounded text-xs font-medium">{c.status}</span>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold">My Teacher</h3>
              </div>
              <p className="text-sm text-muted-foreground">{mockData.teacher}</p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold">Schedule</h3>
              </div>
              <div className="space-y-2">
                {mockData.schedule.map((s) => (
                  <div key={s.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{s.day}</span>
                    <span className="font-medium">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
