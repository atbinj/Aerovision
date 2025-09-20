export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-center gap-2 py-6">
        <p className="text-sm text-muted-foreground">
          &copy; 2025 Aerovision. All Rights Reserved.
        </p>
        <a
          href="https://t.me/devatbin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-foreground/80 hover:text-primary transition-colors"
        >
          designed with 🤍 by Atbin
        </a>
      </div>
    </footer>
  );
}
