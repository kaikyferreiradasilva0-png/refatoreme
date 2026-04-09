import Banner from "./Banner";
import Card from "./Card";
import InfraAws from "../../components/InfraAws";

import "./Principal.css";

function Principal() {
  const servicesData = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Criação de interfaces intuitivas, acessíveis e focadas na experiência do usuário."
    },
    {
      id: 2,
      title: "Infraestrutura AWS",
      description: "Arquitetura, deploy e manutenção de soluções escaláveis na nuvem."
    },
    {
      id: 3,
      title: "IA & Game Dev",
      description: "Desenvolvimento de jogos integrados com algoritmos de Inteligência Artificial."
    },
    {
      id: 4,
      title: "Engenharia de Dados",
      description: "Estruturação de dashboards em Power BI e modelagem de dados para tomada de decisão."
    }
  ];

  return (
    <main>
      <Banner />

      <section id="services" className="cards-section">
        <h2>Nossos Serviços</h2>

        <div className="layout">
          <div id="cards-container" className="cards-grid">
            {servicesData.map((service) => (
              <Card
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        
        <InfraAws />
      </section>
    </main>
  );
}

export default Principal;