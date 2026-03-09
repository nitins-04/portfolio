import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["TypeScript", "Python", "Go", "Java", "C++", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "React Native"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "FastAPI", "Express", "gRPC", "GraphQL"],
  },
  {
    category: "Tools & Infra",
    skills: ["Git", "Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading font-semibold text-sm tracking-[0.3em] uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-14">
            My <span className="text-gradient">toolkit.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-heading font-bold text-primary mb-4 text-sm tracking-wider uppercase">
                {cat.category}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
