import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary font-heading font-semibold text-sm tracking-[0.3em] uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Let's <span className="text-gradient">connect.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            I'm always open to new opportunities, collaborations, and conversations.
            Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="glow-primary font-heading font-semibold" asChild>
              <a href="mailto:nitin.s1204@gmail.com">
                <Mail size={18} />
                Send an Email
                <ArrowUpRight size={16} />
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/nitins-04"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nitin-shivannagari-a098a3236/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Built with passion at UIUC
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
