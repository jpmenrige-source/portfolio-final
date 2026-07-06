import { Building2, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Senior AI Automation Engineer",
    company: "Tech Innovation Corp",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Leading the development of AI-powered automation solutions for enterprise clients. Designing and implementing multi-agent systems that orchestrate complex business workflows.",
    achievements: [
      "Architected AI assistant handling 10K+ daily queries",
      "Reduced operational costs by 40% through automation",
      "Led team of 5 engineers on voice AI project",
    ],
    technologies: ["Python", "LangChain", "AWS", "OpenAI", "React"],
  },
  {
    title: "AI Solutions Developer",
    company: "Digital Transform Labs",
    location: "San Francisco, CA",
    period: "2021 - 2023",
    description:
      "Developed custom AI solutions for clients across healthcare, finance, and e-commerce sectors. Specialized in NLP applications and conversational AI systems.",
    achievements: [
      "Built RAG systems for 3 enterprise clients",
      "Created automated document processing pipeline",
      "Implemented voice AI for healthcare scheduling",
    ],
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "FastAPI"],
  },
  {
    title: "Automation Engineer",
    company: "CloudFirst Solutions",
    location: "Austin, TX",
    period: "2019 - 2021",
    description:
      "Designed and implemented workflow automation solutions integrating various SaaS platforms. Built custom connectors and middleware for seamless data flow.",
    achievements: [
      "Automated 50+ business workflows",
      "Integrated 30+ third-party APIs",
      "Reduced manual processing by 80%",
    ],
    technologies: ["Python", "n8n", "Zapier", "REST APIs", "SQL"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A journey of continuous learning and impactful contributions
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1 md:-translate-x-1.5 top-1.5"></div>

                  <div className="flex-1 md:w-1/2 ml-6 md:ml-0">
                    <Card className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <div className="flex flex-wrap items-center gap-3 mt-2 text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Building2 className="h-4 w-4" />
                                <span className="font-medium text-foreground">
                                  {exp.company}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.period}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground">{exp.description}</p>

                          <div>
                            <h4 className="text-sm font-medium mb-2">Key Achievements</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement) => (
                                <li
                                  key={achievement}
                                  className="text-sm text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
