import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let's get in touch! Feel free to reach out to me through any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            I'm interested in freelance opportunities, especially ambitious or large projects.
            However, if you have other requests or questions, don't hesitate to contact me.
          </p>

          <div className="space-y-6">
            <Card className="bg-background/60 backdrop-blur-md">
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-md">
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaEnvelope className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-md">
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaPhone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Connect with me on social media</h3>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/60 backdrop-blur-md hover:bg-primary/10 p-4 rounded-full transition-colors flex items-center justify-center"
              >
                <FaGithub className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/60 backdrop-blur-md hover:bg-primary/10 p-4 rounded-full transition-colors flex items-center justify-center"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
          <Card className="bg-background/60 backdrop-blur-md">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 rounded-md border border-border bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 rounded-md border border-border bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      className="w-full p-3 rounded-md border border-border bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Your Message"
                      className="w-full p-3 rounded-md border border-border bg-background/50 resize-none"
                    ></textarea>
                  </div>
                </div>

                <Button className="w-full rounded-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
