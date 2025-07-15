import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "weslleysouza22@gmail.com",
      href: "mailto:weslleysouza22@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      value: "+55 (83) 99980-6838",
      href: "tel:+5583999806838"
    },
  {
    icon: <FaWhatsapp className="h-6 w-6 text-green-500" />,
    title: "WhatsApp",
    value: "+55 (83) 99980-6838",
    href: "https://wa.me/5583999806838"
  }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      href: "https://github.com/weslleycz",
      color: "hover:text-foreground"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn", 
      href: "https://www.linkedin.com/in/francisco-weslley/",
      color: "hover:text-primary"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      href: "mailto:weslleysouza22@gmail.com",
      color: "hover:text-neon-cyan"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Vamos</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Conversar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interessado em discutir um projeto ou oportunidade? Entre em contato!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Informações de Contato
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="flex flex-col items-center gap-4">
                          <div className="text-primary">
                            {info.icon}
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.title}</p>
                            {info.href !== "#" ? (
                              <a 
                                href={info.href}
                                className="text-foreground hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Redes Sociais
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      asChild
                      className={`border-border hover:border-primary ${social.color} transition-all duration-300 hover:shadow-neon`}
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                        <span className="ml-2">{social.title}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;