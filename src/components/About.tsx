import { Code, Database, Server, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Frontend Moderno",
      description: "React, Next.js, TypeScript e Angular para interfaces responsivas e performáticas"
    },
    {
      icon: <Server className="h-8 w-8 text-neon-cyan" />,
      title: "Backend Robusto", 
      description: "Node.js, NestJS, Spring Boot com APIs RESTful e arquitetura escalável"
    },
    {
      icon: <Database className="h-8 w-8 text-neon-green" />,
      title: "Dados & Performance",
      description: "PostgreSQL, MongoDB, Redis e otimização para alta disponibilidade"
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "DevOps & Cloud",
      description: "Docker, Kubernetes, AWS, CI/CD para deployments automatizados"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Sobre</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Mim</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desenvolvedor full stack com experiência comprovada em projetos de grande escala
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="prose prose-lg text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Sou um desenvolvedor full stack com <strong className="text-foreground">experiência comprovada</strong> em 
                  backend com Node.js, frontend com React/Next.js e práticas DevOps com Kubernetes, Docker e CI/CD.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Atuei em <strong className="text-foreground">projetos de grande escala</strong> e alta disponibilidade, 
                  com foco em performance, segurança e escalabilidade. Minha experiência inclui desde desenvolvimento 
                  de plataformas SaaS até sistemas de gestão municipal e soluções de BI para aquicultura.
                </p>

                <p className="text-lg leading-relaxed">
                  Tenho expertise em resolver problemas reais com <strong className="text-foreground">código limpo e eficiente</strong>, 
                  sempre aplicando as melhores práticas de desenvolvimento e arquitetura de software.
                </p>
              </div>

            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-3xl opacity-20" />
              <Card className="relative bg-gradient-card border-border/50 shadow-elevated">
                <CardContent className="p-8">
                  <blockquote className="text-xl italic text-foreground text-center leading-relaxed">
                    "Entrego código como quem resolve problemas reais: com visão de produto, 
                    escalabilidade e performance."
                  </blockquote>
                  <div className="text-center mt-6">
                    <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-card-dark"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;