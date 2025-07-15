import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "primary",
      skills: [
        "React", "Next.js", "Angular", "TypeScript", "JavaScript",
        "HTML5", "CSS3", "Sass", "Material UI", "Bootstrap", 
        "Styled Components", "Framer Motion", "React Native", "Expo"
      ]
    },
    {
      title: "Backend",
      color: "neon-cyan", 
      skills: [
        "Node.js", "NestJS", "Express.js", "Spring Boot", "TypeORM",
        "Prisma", "Mongoose", "Sequelize", "REST APIs", "GraphQL",
        "WebSocket", "JSF"
      ]
    },
    {
      title: "Bancos de Dados",
      color: "neon-green",
      skills: [
        "PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase",
        "Apache Cassandra", "DBeaver"
      ]
    },
    {
      title: "DevOps & Cloud",
      color: "primary",
      skills: [
        "Docker", "Kubernetes", "AWS", "DigitalOcean", "GitHub Actions",
        "CI/CD", "Nginx", "Apache", "PM2", "Grafana", "Linux"
      ]
    },
    {
      title: "Ferramentas",
      color: "neon-cyan",
      skills: [
        "Git", "GitHub", "Figma", "Insomnia", "Postman", "VSCode",
        "Swagger", "Electron", "Ionic"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20";
      case "neon-cyan":
        return "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20 hover:bg-neon-cyan/20";
      case "neon-green":
        return "bg-neon-green/10 text-neon-green border-neon-green/20 hover:bg-neon-green/20";
      default:
        return "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20";
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Habilidades</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Técnicas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stack completo para desenvolvimento de soluções modernas e escaláveis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-dark group"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className={`${getColorClasses(category.color)} transition-all duration-300 hover:scale-105`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-card border-border/50 shadow-elevated max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Experiência Comprovada
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Trabalhei em projetos internacionais em Portugal, desenvolvendo soluções para gestão do conhecimento,
                  inteligência de negócios e sistemas de recomendação para fazendas de camarão. Experiência em 
                  arquiteturas de microserviços, integração de IA e desenvolvimento de aplicações de alta performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;