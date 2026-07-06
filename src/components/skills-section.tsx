import { Bot, Workflow, Mic, Cloud, Code as Code2, Brain, Cpu, Database, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      "LLM Integration",
      "Prompt Engineering",
      "AI Agents",
      "RAG Systems",
      "Fine-tuning",
      "Embedding Models",
    ],
  },
  {
    title: "Automation & Workflows",
    icon: Workflow,
    skills: [
      "n8n",
      "Make (Integromat)",
      "Zapier",
      "Custom Workflows",
      "API Orchestration",
      "Event-driven Systems",
    ],
  },
  {
    title: "Voice AI",
    icon: Mic,
    skills: [
      "Twilio",
      "Vapi",
      "Bland AI",
      "Speech Synthesis",
      "STT/TTS",
      "Real-time Audio",
    ],
  },
  {
    title: "Development",
    icon: Code2,
    skills: [
      "Python",
      "TypeScript",
      "Node.js",
      "React",
      "FastAPI",
      "Next.js",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      "AWS",
      "Google Cloud",
      "Vercel",
      "Docker",
      "Serverless",
      "CI/CD",
    ],
  },
  {
    title: "AI Platforms",
    icon: Bot,
    skills: [
      "OpenAI",
      "Anthropic",
      "Langchain",
      "LlamaIndex",
      "CrewAI",
      "AutoGen",
    ],
  },
];

const additionalSkills = [
  { name: "REST APIs", icon: Globe },
  { name: "Webhooks", icon: Zap },
  { name: "Vector Databases", icon: Database },
  { name: "GPU Computing", icon: Cpu },
  { name: "Real-time Systems", icon: Zap },
  { name: "WebSockets", icon: Globe },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A diverse toolkit for building AI-powered solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/30 border-border/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 text-center">
                Additional Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {additionalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 transition-colors"
                  >
                    <skill.icon className="h-3.5 w-3.5" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
