import { motion } from "framer-motion";
import { Rocket, Brain, Users } from "lucide-react";

const goals = [
  {
    icon: Rocket,
    title: "Build Products That Matter",
    description:
      "I want to create technology that solves real problems for real people — products that scale and make a measurable difference in everyday life.",
  },
  {
    icon: Brain,
    title: "Push the Boundaries of AI",
    description:
      "I'm deeply interested in artificial intelligence and machine learning. I aspire to contribute to research and applications that advance what's possible with AI.",
  },
  {
    icon: Users,
    title: "Lead Engineering Teams",
    description:
      "Long-term, I aim to grow into a technical leadership role where I can mentor engineers, shape product vision, and build high-performing teams.",
  },
];

const AspirationsSection = () => {
  return (
    <section id="aspirations" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-primary font-heading font-semibold text-sm tracking-[0.3em] uppercase mb-3">
            Aspirations
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-14">
            Where I'm <span className="text-gradient">headed.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
                <goal.icon size={28} />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3">{goal.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AspirationsSection;
