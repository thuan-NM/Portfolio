import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo, navLinks } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/60 backdrop-blur-md">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="inline-block">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                Thuan Nguyen
              </h2>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              {personalInfo.bio}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-foreground/70">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="text-sm text-foreground/70">
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li className="text-sm text-foreground/70">
                <span className="font-medium">Location:</span>{" "}
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Minh Thuan Nguyen. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Front-end Web Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
