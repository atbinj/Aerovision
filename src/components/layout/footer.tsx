import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-center gap-4 py-6 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Aerovision. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
            <a
                href="https://www.linkedin.com/in/aerovision-aerial-photogrammetry-startup-959784362/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                </Button>
            </a>
            <a href="https://t.me/devatbin" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/80 hover:text-primary transition-colors">
                designed with 🤍 by Atbin
            </a>
        </div>
      </div>
    </footer>
  );
}
