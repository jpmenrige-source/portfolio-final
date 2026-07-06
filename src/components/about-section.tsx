import { User, Briefcase, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Briefcase,
    title: "AI-First Approach",
    description:
      "Specializing in building AI-powered solutions that automate complex workflows and business processes.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "Focused on delivering measurable outcomes through intelligent automation and smart integrations.",
  },
  {
    icon: Heart,
    title: "Passion for Innovation",
    description:
      "Constantly exploring emerging AI technologies to create cutting-edge solutions.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about leveraging AI to solve real-world problems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Who I Am</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                I'm an AI Automation Engineer and Solutions Developer with a
                passion for building intelligent systems that transform how
                businesses operate. With expertise in AI agents, workflow
                automation, and voice AI technologies, I help organizations
                streamline operations and unlock new possibilities through
                automation.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to
                push the boundaries of what's possible with AI. From developing
                conversational AI agents to orchestrating complex multi-system
                workflows, I thrive on challenges that require both technical
                depth and creative problem-solving.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest AI
                research, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <Card
                  key={item.title}
                  className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
