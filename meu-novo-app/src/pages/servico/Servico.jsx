import InfraAws from "../../components/InfraAws";
import Banner from "../../components/principal/Banner";
import Card from "../../components/principal/Card";
import "./Servico.css";

function Servico() {
  const awsData = [
  {
    id: 1,
    title: "Cloud Escalável",
    description: "Infraestrutura AWS com alta disponibilidade e crescimento sob demanda."
  },
  {
    id: 2,
    title: "Deploy Automatizado",
    description: "Integração contínua com pipelines CI/CD para deploy rápido e seguro."
  },
  {
    id: 3,
    title: "Segurança na Nuvem",
    description: "Proteção de dados com criptografia e boas práticas da AWS."
  }
];

  return (
      <section id="Infraestrutura" className="cards-section">
        <h2>Infraestrutura Aws</h2>

        <div className="layout">
          <div id="cards-container" className="cards-grid">
            {awsData.map((aws) => (
              <InfraAws
                key={aws.id}
                title={aws.title}
                description={aws.description}
              />
            ))}
          </div>
        </div>
        
      </section>
    
  ); 
}

export default Servico;