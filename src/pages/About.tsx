import Layout from "@/components/Layout";
import { BookOpen, Target, Eye, Heart, ShieldCheck, Users } from "lucide-react";
import cacCertificate from "@/assets/cac-certificate.jpg";
import tutorMaleAvatar from "@/assets/tutor-male-avatar.png";
import tutorFemaleAvatar from "@/assets/tutor-female-avatar.png";

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

    {/* Founder */}
    <section className="section-padding bg-card">
      <div className="container-max max-w-4xl">
        <h2 className="text-3xl text-center mb-8">About the Founder</h2>
        <div className="bg-background rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-semibold mb-1">Akinjobi Abd'Rahman Abu Huzaifah</h3>
          <p className="text-sm text-primary font-medium mb-4">Founder &amp; Lead Instructor</p>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A passionate teacher, writer, and speaker from Ogun State, Nigeria, originally hailing from Oyo. Abu Huzaifah takes great pride in his heritage and the values instilled in him from a young age.
            </p>
            <p>
              Dedicated to spreading the wisdom of the Qur'ān, he has had the privilege of teaching many individuals the sacred words of Allah. His journey as a Qur'ān teacher has been both fulfilling and rewarding, helping numerous students memorize and understand the holy text.
            </p>
            <p>
              He completed his Qur'ān memorization studies at the <strong>Ali Institute for Qur'ān Memorization, Ibadan</strong>, where he deepened his knowledge and honed his teaching skills. Despite successfully teaching many students, he remains a student of knowledge — always striving to learn and grow in both personal and professional life.
            </p>
            <p>
              Also known as <strong>Abu Huzaifah</strong>, a name he holds dear, reflecting his commitment to his faith and his desire to contribute positively to the Ummah.
            </p>
          </div>
        </div>
      </div>
    </section>

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

    {/* CAC Accreditation */}
    <section className="section-padding">
      <div className="container-max max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-8">
          <ShieldCheck className="text-primary" size={32} />
          <h2 className="text-3xl text-center">Government Registered & Accredited</h2>
        </div>
        <div className="bg-card rounded-lg border border-border p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <img
                src={cacCertificate}
                alt="CAC Certificate of Incorporation"
                className="w-64 rounded-lg shadow-md border border-border"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Certificate of Incorporation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Arresalah International Madrasah Limited is a duly registered private company under the
                <strong> Companies and Allied Matters Act 2020</strong> of the Federal Republic of Nigeria.
              </p>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Company Registration No:</span> 9279310</p>
                <p><span className="font-semibold">TIN:</span> 2622782263635</p>
                <p><span className="font-semibold">Date of Incorporation:</span> 4th February, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Our Teachers */}
    <section className="section-padding bg-card">
      <div className="container-max max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Users className="text-primary" size={32} />
          <h2 className="text-3xl text-center">Our Teachers</h2>
        </div>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Meet our dedicated and qualified tutors guiding students on their Quranic journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-background rounded-lg p-8 border border-border flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-muted border-4 border-primary/20">
              <img src={tutorMaleAvatar} alt="Ibn Shatibiyy" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold">Ibn Shatibiyy</h3>
            <p className="text-sm text-primary font-medium mt-1 mb-3">Male Tutor</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Quran</span>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Aqeedah</span>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Lughah</span>
            </div>
          </div>
          <div className="bg-background rounded-lg p-8 border border-border flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-muted border-4 border-primary/20">
              <img src={tutorFemaleAvatar} alt="Ummu Aneesah" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold">Ummu Aneesah</h3>
            <p className="text-sm text-primary font-medium mt-1 mb-3">Female Tutor</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Quran</span>
            </div>
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
