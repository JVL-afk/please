
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-[rgba(255,255,255,0.1)] bg-[rgba(30,15,45,0.9)]">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-balance text-center text-sm leading-loose text-[var(--text-secondary)] md:text-left">
          © {new Date().getFullYear()} AFFILIFY. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
          <Link
            href="/terms"
            className="transition-colors hover:text-[var(--button-primary)] text-[var(--text-secondary)]"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="transition-colors hover:text-[var(--button-primary)] text-[var(--text-secondary)]"
          >
            Privacy
          </Link>
          <Link
            href="/cookies"
            className="transition-colors hover:text-[var(--button-primary)] text-[var(--text-secondary)]"
          >
            Cookies
          </Link>
          <Link
            href="/docs"
            className="transition-colors hover:text-[var(--button-primary)] text-[var(--text-secondary)]"
          >
            Docs
          </Link>
          {/* Add other footer links if needed */}
        </nav>
      </div>
    </footer>
  );
}

