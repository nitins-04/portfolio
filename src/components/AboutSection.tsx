import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-primary font-heading font-semibold text-sm tracking-[0.3em] uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-10">
            Driven by curiosity,{" "}
            <span className="text-gradient">fueled by code.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: GraduationCap, title: "Education", desc: "B.S. Computer Science — University of Illinois Urbana-Champaign" },
              { icon: MapPin, title: "Location", desc: "Champaign-Urbana, IL" },
              { icon: Sparkles, title: "Interests", desc: "Full-Stack Development, AI/ML, Systems Design" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <item.icon size={24} className="text-primary mb-3" />
                <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a student at UIUC passionate about creating elegant software solutions
            to real-world problems. With a strong foundation in computer science fundamentals
            and hands-on experience building full-stack applications, I'm constantly seeking
            opportunities to learn, grow, and make an impact through technology. When I'm
            not coding, you can find me exploring new technologies, contributing to open-source
            projects, or collaborating with fellow students on innovative ideas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
