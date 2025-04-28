
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming button component exists or will be created

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(255,255,255,0.1)] bg-[rgba(45,26,61,0.9)] backdrop-blur supports-[backdrop-filter]:bg-[rgba(45,26,61,0.7)]">
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Placeholder for Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--button-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 2-4 4-4s4 2 4 4c2-1 2.657-2.657 2.657-2.657z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.000 14a3 3 0 00-2.121 2.121z" />
            </svg>
            <span className="hidden font-bold sm:inline-block text-lg">
              AFFILIFY
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/features"
              className="transition-colors hover:text-[var(--button-primary)] text-[var(--text-secondary)]"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="transition-colors hover:text-[var(--button-primary)] text-[var(--text-secondary)]"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="transition-colors hover:text-[var(--button-primary)] text-[var(--text-secondary)]"
            >
              Docs
            </Link>
            {/* Add other nav links if needed */}
          </nav>
        </div>
        {/* Mobile Menu Button (placeholder) */}
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R1mcq:"
          data-state="closed"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link href="/login">
              <Button
                variant="ghost"
                className="relative hidden h-8 w-auto justify-start rounded-[0.5rem] bg-transparent px-4 py-1 text-sm font-normal text-[var(--text-secondary)] shadow-none transition-colors hover:bg-[rgba(255,255,255,0.1)] hover:text-white sm:pr-1 md:block"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="hidden h-8 bg-[var(--button-primary)] px-4 py-1 text-white shadow transition-colors hover:bg-[var(--button-primary-hover)] md:block"
              >
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

