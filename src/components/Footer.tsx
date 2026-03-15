import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-brown-dark text-cream/80">
    <div className="container-max section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl text-cream mb-4">Arresalah International Madrasah</h3>
          <p className="text-sm leading-relaxed">
            Dedicated to providing quality Quranic education to students worldwide through personalized online learning.
          </p>
        </div>
        <div>
          <h4 className="text-lg text-cream mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
            <Link to="/courses" className="hover:text-gold transition-colors">Our Courses</Link>
            <Link to="/payment" className="hover:text-gold transition-colors">Make Payment</Link>
            <Link to="/login" className="hover:text-gold transition-colors">Student Login</Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg text-cream mb-4">Connect With Us</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href="https://www.instagram.com/arresalahinstitute" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Instagram size={18} /> @arresalahinstitute
            </a>
            <span className="flex items-center gap-2">
              <Mail size={18} /> info@arresalah.com
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 mt-10 pt-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Arresalah International Madrasah. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
