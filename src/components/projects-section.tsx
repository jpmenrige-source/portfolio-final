import { ExternalLink, Github, Bot, Phone, Workflow, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Enterprise AI Assistant",
    description:
      "A sophisticated AI assistant platform that automates customer support, handles inquiries, and provides intelligent responses using RAG architecture with company knowledge bases.",
    icon: Bot,
    technologies: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "React"],
    highlights: [
      "90% reduction in support ticket response time",
      "Handles 10,000+ queries daily",
      "Custom RAG pipeline with 95% accuracy",
    ],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Voice AI Call Center",
    description:
      "End-to-end voice AI solution for managing inbound and outbound calls with natural conversation flow, sentiment analysis, and seamless human handoff capabilities.",
    icon: Phone,
    technologies: ["TypeScript", "Twilio", "Vapi", "Node.js", "WebSocket", "PostgreSQL"],
    highlights: [
      "Processes 5,000+ calls daily",
      "4.5/5 customer satisfaction rating",
      "60% call deflection rate",
    ],
    image: "https://images.pexels.com/photos/7615659/pexels-photo-7615659.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Workflow Orchestration Platform",
    description:
      "Custom no-code workflow builder that enables non-technical teams to create complex automation sequences across 50+ integrated services.",
    icon: Workflow,
    technologies: ["React", "n8n", "Python", "Redis", "Docker", "PostgreSQL"],
    highlights: [
      "Connects 50+ third-party services",
      "200+ active workflows",
      "Saves 40+ hours weekly per team",
    ],
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "AI-Powered Search Engine",
    description:
      "Semantic search system combining vector embeddings with traditional search for enterprise document retrieval, featuring real-time indexing and natural language queries.",
    icon: Search,
    technologies: ["Python", "OpenAI", "Qdrant", "Elasticsearch", "FastAPI", "Vue.js"],
    highlights: [
      "Index 1M+ documents",
      "Sub-100ms query response",
      "Hybrid search algorithm",
    ],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world AI solutions that delivered measurable impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 bg-card"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                        Key Results
                      </h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
