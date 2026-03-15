import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { BookOpen, GraduationCap, Star } from "lucide-react";

const courses = [
  {
    icon: BookOpen,
    title: "Kids Quran Class",
    age: "Ages 4–15",
    description: "A fun and structured program designed to teach children Quran reading with proper Tajweed, Surahs memorization, and basic Islamic studies.",
    priceNGN: "₦15,000",
    priceUSD: "$15",
    period: "monthly",
    features: ["Quran Reading (Nooraniyya/Qa'idah)", "Tajweed Rules", "Short Surahs Memorization", "Basic Duas & Islamic Manners"],
  },
  {
    icon: GraduationCap,
    title: "Adult Quran Class",
    age: "Ages 16+",
    description: "Comprehensive Quran learning for adults — whether you're a beginner or looking to perfect your recitation with advanced Tajweed.",
    priceNGN: "₦20,000",
    priceUSD: "$20",
    period: "monthly",
    features: ["Quran Reading & Tajweed", "Tafseer (Quran Interpretation)", "Qira'at Studies", "Flexible Scheduling"],
  },
  {
    icon: Star,
    title: "Hifz (Memorization) Program",
    age: "All Ages",
    description: "An intensive Quran memorization program with dedicated tutors to guide you through memorizing the entire Holy Quran with proper revision.",
    priceNGN: "Contact Us",
    priceUSD: "",
    period: "",
    features: ["Personalized Memorization Plan", "Daily Revision Sessions", "Progress Tracking", "Certification Upon Completion"],
  },
];

const Courses = () => (
  <Layout>
    <section className="bg-brown-dark section-padding">
      <div className="container-max text-center">
        <h1 className="text-4xl sm:text-5xl text-cream mb-4">Our Courses</h1>
        <p className="text-cream/70 max-w-2xl mx-auto text-lg">
          Choose the program that best suits your learning goals and begin your Quran journey today.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {courses.map((course) => (
            <div key={course.title} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <div className="bg-primary/5 p-6 text-center border-b border-border">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <course.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
                <span className="text-sm text-muted-foreground">{course.age}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary">{course.priceNGN}</div>
                  {course.priceUSD && (
                    <div className="text-sm text-muted-foreground">
                      {course.priceUSD} {course.period}
                    </div>
                  )}
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="text-gold mt-1">✓</span>
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/payment">Enroll Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Courses;
