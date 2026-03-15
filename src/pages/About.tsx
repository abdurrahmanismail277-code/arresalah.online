import Layout from "@/components/Layout";
import { BookOpen, Target, Eye, Heart, ShieldCheck } from "lucide-react";
import cacCertificate from "@/assets/cac-certificate.jpg";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-brown-dark section-padding">
      <div className="container-max text-center">
        <h1 className="text-4xl sm:text-5xl text-cream mb-4">About Us</h1>
        <p className="text-cream/70 max-w-2xl mx-auto text-lg">
          Discover the story, mission, and vision behind Arresalah International Madrasah.
        </p>
      </div>
    </section>

    {/* About */}
    <section className="section-padding">
      <div className="container-max max-w-4xl">
        <div className="prose prose-lg mx-auto">
          <h2 className="text-3xl mb-6 text-center">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Arresalah International Madrasah is a premier online Quran learning institution dedicated to making authentic Islamic education accessible to Muslims around the world. Founded with the vision of bridging the gap between students and qualified Quran teachers, we offer structured programs for children and adults alike.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our certified tutors bring years of experience in Tajweed, Hifz, and Qira'at, ensuring every student receives personalized attention and achieves measurable progress in their Quranic journey.
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-card">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-background rounded-lg p-8 border border-border">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <Target className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide accessible, high-quality Quranic education that empowers Muslims of all ages to read, understand, and memorize the Holy Quran with proper Tajweed, guided by experienced and compassionate teachers.
            </p>
          </div>
          <div className="bg-background rounded-lg p-8 border border-border">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <Eye className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the leading global online Madrasah, nurturing a generation of Quran-literate Muslims who carry the light of the Quran in their hearts and lives, regardless of geographical boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Teaching Method */}
    <section className="section-padding">
      <div className="container-max max-w-4xl">
        <h2 className="text-3xl text-center mb-10">Our Teaching Method</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: BookOpen, title: "One-on-One Sessions", desc: "Each student gets individual attention from their assigned tutor for maximum learning." },
            { icon: Heart, title: "Patient & Supportive", desc: "Our teachers are known for their patience, dedication, and passion for Quran education." },
            { icon: Target, title: "Goal-Oriented Progress", desc: "Structured curriculum with clear milestones to track and celebrate student achievements." },
            { icon: Eye, title: "Regular Assessments", desc: "Monthly progress reports and assessments to ensure consistent improvement." },
          ].map((m) => (
            <div key={m.title} className="flex gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <m.icon className="text-primary" size={22} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{m.title}</h4>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
