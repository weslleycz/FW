import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Plataforma Greenfy",
      description:
        "Sistema de inteligência de negócios para fazendas de camarão com recomendações automatizadas baseadas em análise de dados e mineração de dados. Desenvolvido para o mercado português.",
      highlights: [
        "Mineração de dados",
        "Recomendações automatizadas",
        "Alta disponibilidade",
        "Escalabilidade",
        "IA integrada",
      ],
      category: "SaaS Internacional",
      year: "2024-2025",
    },
    {
      title: "Plataforma CMAX",
      description:
        "Sistema completo para criação, gestão e aplicação de simulados do ENADE, utilizado pelo Centro Universitário Santa Maria (UNIFSM). Desenvolvido com foco em performance e escalabilidade, permite geração de questões personalizadas, controle de simulações por curso e análise de desempenho dos estudantes.",
      highlights: [
        "Desenvolvimento full stack",
        "Infraestrutura DevOps com CI/CD e Docker",
      ],
      category: "Educação / Avaliação Acadêmica",
      year: "2022-2024",
    },

    {
      title: "TransCare - Aplicativo Médico",
      description:
        "Aplicativo voltado para médicos e enfermeiros da atenção básica de saúde da comunidade trans. Projeto de extensão IFPB em parceria com LATICS-UFCG, resultando em registro de software.",
      highlights: [
        "Impacto social",
        "Registro de software",
        "Pesquisa aplicada",
      ],
      category: "Projeto Social",
      year: "2023",
    },
    {
      title: "SOLIVIDA - App Institucional",
      description:
        "Aplicativo para Instituto Frei Beda de Desenvolvimento Social, facilitando comunicação entre membros da rede de apoio a famílias camponesas do Alto Sertão Paraibano.",
      highlights: [
        "Desenvolvimento social",
        "Comunicação rural",
        "Gestão comunitária",
      ],
      category: "Projeto Voluntário",
      year: "2021",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "SaaS Internacional":
        return "bg-primary/10 text-primary border-primary/20";
      case "Enterprise Software":
        return "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20";
      case "Projeto Social":
        return "bg-neon-green/10 text-neon-green border-neon-green/20";
      case "Projeto Voluntário":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Projetos em</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Destaque
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções reais que geram impacto, desde plataformas SaaS
              internacionais até projetos sociais
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elevated group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="flex-1">
                      <Badge
                        variant="outline"
                        className={`${getCategoryColor(project.category)} mb-3`}
                      >
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.year}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Destaques:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
