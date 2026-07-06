import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Open to Remote Opportunities",
    href: null,
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how AI automation can transform
              your business.
            </p>
          </div>

          <Card className="bg-card border-border/50 hover:border-primary/20 transition-colors">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Let's Build Something Amazing
                    </h3>
                    <p className="text-muted-foreground">
                      I'm always interested in hearing about new projects and
                      opportunities. Whether you need an AI solution, workflow
                      automation, or want to explore what's possible with modern AI
                      technologies, I'd love to chat.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactMethods.map((method) => (
                      <div key={method.label} className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <method.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {method.label}
                          </p>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="font-medium">{method.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center md:items-end">
                  <div className="space-y-4 w-full max-w-xs">
                    <p className="text-center md:text-right text-sm text-muted-foreground">
                      Ready to start your AI journey?
                    </p>
                    <Button size="lg" className="w-full group" asChild>
                      <a href="mailto:hello@example.com">
                        <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Send a Message
                      </a>
                    </Button>
                    <p className="text-center md:text-right text-xs text-muted-foreground">
                      Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
