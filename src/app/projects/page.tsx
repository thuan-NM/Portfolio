import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and the technologies I've been working with.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden bg-background/60 backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-video w-full relative bg-accent/5 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-fill"
                    priority
                  />
                </div>

                <div className="md:col-span-2 p-6">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <Badge variant="outline">{project.period}</Badge>
                  </div>

                  {project.role && (
                    <div className="mb-4">
                      <span className="text-sm font-medium">Role: </span>
                      <span className="text-sm">{project.role}</span>
                      {project.teamSize && (
                        <span className="text-sm"> (Team size: {project.teamSize})</span>
                      )}
                    </div>
                  )}

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  {project.responsibility && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium mb-2">Responsibilities:</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.responsibility}
                      </p>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="rounded-full">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
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

                    {project.github.voice_room_fe_link && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.github.voice_room_fe_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <FaGithub className="w-4 h-4" /> Voice Room FE
                        </a>
                      </Button>
                    )}

                    {project.github.voice_room_be_link && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.github.voice_room_be_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <FaGithub className="w-4 h-4" /> Voice Room BE
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
