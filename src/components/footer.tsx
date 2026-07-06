import { Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Separator className="mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by
              John Paulus Menrige
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a
                href="#about"
                className="hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
