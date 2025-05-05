import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, education, experience, activities, certificates } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, experience, and qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">{personalInfo.name}</h2>
            <h3 className="text-xl text-muted-foreground mb-6">{personalInfo.title}</h3>

            <p className="text-muted-foreground mb-6">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="text-sm font-semibold uppercase mb-2">Location</h4>
                <p className="text-muted-foreground">{personalInfo.location}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase mb-2">Email</h4>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase mb-2">Phone</h4>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase mb-2">Connect</h4>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={edu.school} className="bg-background/60 backdrop-blur-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                <p className="text-muted-foreground mb-2">{edu.period}</p>
                {edu.major && (
                  <p>
                    <span className="font-medium">Major:</span> {edu.major}
                  </p>
                )}
                {edu.gpa && (
                  <p>
                    <span className="font-medium">GPA:</span> {edu.gpa}
                  </p>
                )}
                {edu.course && (
                  <p>
                    <span className="font-medium">Course:</span> {edu.course}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Work Experience</h2>
        {experience.map((exp, index) => (
          <Card key={exp.position} className="mb-6 bg-background/60 backdrop-blur-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
              <p className="text-muted-foreground mb-4">{exp.period}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-6">Activities</h2>
          {activities.map((activity) => (
            <Card key={activity.title} className="mb-6 bg-background/60 backdrop-blur-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
                <p className="text-muted-foreground mb-2">{activity.year}</p>
                <p className="mb-2">
                  <span className="font-medium">Role:</span> {activity.role}
                </p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Certificates</h2>
          {certificates.map((certificate) => (
            <Card key={certificate.title} className="mb-6 bg-background/60 backdrop-blur-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">{certificate.title}</h3>
                <p className="text-muted-foreground">{certificate.date}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}
