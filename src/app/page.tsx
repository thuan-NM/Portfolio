import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { personalInfo, projects, skills } from "@/lib/data";

export default function HomePage() {
  // Display only the most recent projects
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <Badge variant="outline" className="mb-4 text-sm py-1 px-3">
              Front-end Web Developer
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-foreground">Making</span>
              <span className="block bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                Web Development
              </span>
              <span className="block text-foreground">Better</span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/projects">View My Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href={`mailto:${personalInfo.email}`}>Contact Me</a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/images/profile.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-accent/5 rounded-3xl p-8 mb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate front-end web developer specializing in creating responsive, user-friendly applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-background/60 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Technical expertise</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {skills.programmingLanguages.map((skill, index) => (
                  <li key={index} className="text-sm">
                    • {skill}
                  </li>
                ))}
                {skills.frameworks.slice(0, 2).map((skill, index) => (
                  <li key={index} className="text-sm">
                    • {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="gap-1">
                <Link href="/skills">
                  See all skills <HiArrowLongRight className="ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-background/60 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Academic background</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">CAN THO UNIVERSITY</h4>
                  <p className="text-sm text-muted-foreground">2021 - 2025</p>
                  <p className="text-sm">Computer Science, GPA: 3.4/4</p>
                </div>
                <div>
                  <h4 className="font-medium">MINDX SCHOOL</h4>
                  <p className="text-sm text-muted-foreground">2023 - 2024</p>
                  <p className="text-sm">Web Development Course</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="gap-1">
                <Link href="/about">
                  Learn more <HiArrowLongRight className="ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-background/60 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Experience</CardTitle>
              <CardDescription>Professional journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-medium">INTERNSHIP at FPT Software</h4>
                <p className="text-sm text-muted-foreground">1/2025 - 4/2025</p>
                <ul className="mt-2 space-y-1">
                  {/* Show only first responsibility for space */}
                  <li className="text-sm">• {skills.programmingLanguages[0]}</li>
                  <li className="text-sm">• {skills.programmingLanguages[1]}</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="gap-1">
                <Link href="/about">
                  View more <HiArrowLongRight className="ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Recent work I've built using modern technologies
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 rounded-full">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden bg-background/60 backdrop-blur-md">
              <div className="aspect-video w-full relative bg-accent/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant="outline">{project.period}</Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="rounded-full">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {project.github.frontend_link && (
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.github.frontend_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <FaGithub className="w-4 h-4" /> Frontend
                    </a>
                  </Button>
                )}
                {project.github.backend_link && (
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.github.backend_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <FaGithub className="w-4 h-4" /> Backend
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 mb-16 bg-primary/10 rounded-3xl text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <a href={`mailto:${personalInfo.email}`}>Get In Touch</a>
        </Button>
      </section>
    </div>
  );
}
