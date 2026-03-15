import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Star } from "lucide-react";
import Layout from "@/components/Layout";
import logo from "@/assets/logo.jpg";
import maleTutor from "@/assets/male-tutor.png";
import femaleTutor from "@/assets/female-tutor.png";

const features = [
  { icon: BookOpen, title: "Expert Tutors", desc: "Learn from certified Quran teachers with years of experience in Tajweed and Hifz." },
  { icon: Users, title: "One-on-One Classes", desc: "Personalized attention with individual sessions tailored to your learning pace." },
  { icon: Award, title: "Certified Programs", desc: "Earn recognized certificates upon completion of our structured Quran courses." },
  { icon: Star, title: "Flexible Schedule", desc: "Choose class times that work for you — mornings, evenings, or weekends." },
];

const testimonials = [
  {
    text: "The progress is more than expected, there's 100% progress Alhamdulillah. My tutor has been over active, very dedicated and hard working.",
    author: "Student Testimonial",
  },
  {
    text: "Arresalah has transformed my Quran recitation. The teachers are patient and extremely knowledgeable in Tajweed.",
    author: "Parent Feedback",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-brown-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a843' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container-max section-padding relative">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <img src={logo} alt="Arresalah Logo" className="h-28 w-28 rounded-full object-cover mb-8 ring-4 ring-gold/30" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Arresalah International Madrasah
            </h1>
            <p className="text-lg text-cream/70 mb-8 max-w-2xl leading-relaxed">
              Empowering Muslims worldwide with authentic Quranic education. Learn Quran recitation, Tajweed, Hifz, and Qira'at with certified tutors from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gold text-brown-dark hover:bg-gold/90 font-semibold text-base px-8">
                <Link to="/courses">Join Our Classes</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cream/30 text-cream hover:bg-cream/10 text-base px-8">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl text-center mb-4">Why Choose Arresalah?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We provide a comprehensive Islamic learning experience with dedication and excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <f.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background rounded-lg p-8 border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">"{t.text}"</p>
                <p className="font-semibold text-sm text-primary">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brown-dark text-center">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl text-cream mb-4">Begin Your Quran Journey Today</h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            Enroll now and take the first step towards mastering the Holy Quran with expert guidance.
          </p>
          <Button asChild size="lg" className="bg-gold text-brown-dark hover:bg-gold/90 font-semibold text-base px-10">
            <Link to="/courses">View Our Courses</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
