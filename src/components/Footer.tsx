import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container flex  items-center justify-between gap-4  h-24 flex-row py-0">
        <div className="flex items-center text-sm gap-6 text-foreground">
          <Link href="/faq" className="text-foreground hover:text-highlight">
            FAQ
          </Link>
          <Link href="/about" className="text-foreground hover:text-highlight">
            About
          </Link>
          <Link href="/contact" className="text-foreground hover:text-highlight">
            Contact
          </Link>
        </div>
        <p className="text-center text-sm leading-loose text-foreground md:text-left">
          Built by{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 text-highlight"
          >
            EcoMarket
          </a>
          . The source code is available on{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 text-highlight"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

