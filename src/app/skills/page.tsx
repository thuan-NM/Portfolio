import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function SkillsPage() {
  const skillsCategories = [
    {
      name: "Programming Languages",
      skills: skills.programmingLanguages,
      icon: "💻",
    },
    {
      name: "Frameworks",
      skills: skills.frameworks,
      icon: "🛠️",
    },
    {
      name: "Databases",
      skills: skills.databases,
      icon: "🗄️",
    },
    {
      name: "Tools",
      skills: skills.tools,
      icon: "🔧",
    },
    {
      name: "Workflow Tools",
      skills: skills.workflowTools,
      icon: "📊",
    },
    {
      name: "Languages",
      skills: skills.languages,
      icon: "🌐",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">My Skills</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsCategories.map((category) => (
          <Card key={category.name} className="bg-background/60 backdrop-blur-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <span>{category.icon}</span>
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="rounded-full px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-20 mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">My Development Journey</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-primary pl-8 pb-8">
            <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-0"></div>
            <h3 className="text-xl font-bold mb-2">Started with Web Development</h3>
            <p className="text-muted-foreground mb-8">
              My journey into web development began with learning HTML, CSS, and JavaScript fundamentals.
              I quickly developed a passion for creating responsive, user-friendly interfaces.
            </p>

            <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-1/3"></div>
            <h3 className="text-xl font-bold mb-2">Expanded to Frameworks & Libraries</h3>
            <p className="text-muted-foreground mb-8">
              I expanded my knowledge to include modern frameworks like React, and backend technologies
              with Node.js and Express, enabling me to build full-stack applications.
            </p>

            <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-2/3"></div>
            <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
            <p className="text-muted-foreground">
              I'm constantly learning new technologies and improving my skills through personal projects,
              courses, and professional experiences.
            </p>

            <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 bottom-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
