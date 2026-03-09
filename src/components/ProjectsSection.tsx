import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Powered Study Assistant",
    description:
      "A full-stack web app that uses NLP to summarize lecture notes, generate flashcards, and create practice quizzes. Built for students to optimize their study workflow.",
    tech: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Campus Event Platform",
    description:
      "A real-time event discovery platform for UIUC students. Features map-based exploration, RSVP tracking, and personalized event recommendations.",
    tech: ["Next.js", "TypeScript", "Supabase", "Mapbox", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Distributed Task Scheduler",
    description:
      "A fault-tolerant distributed system for scheduling and executing tasks across multiple worker nodes. Implements leader election and work-stealing algorithms.",
    tech: ["Go", "gRPC", "Docker", "Redis", "Kubernetes"],
    github: "#",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A mobile-responsive budgeting app with data visualization, automated transaction categorization, and spending trend analysis.",
    tech: ["React Native", "TypeScript", "Firebase", "Chart.js"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading font-semibold text-sm tracking-[0.3em] uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-14">
            Things I've <span className="text-gradient">built.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="text-xs font-body"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
                  <a href={project.github}>
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                {project.live && (
                  <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
                    <a href={project.live}>
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
