import InfraAws from "../../components/InfraAws";

function Servico() {
  return (
    <div className="infra-aws">
      <h1>Infraestrutura AWS</h1>

      <div className="carousel">
        <InfraAws
          title="Escalabilidade"
          description="Sua aplicação cresce automaticamente conforme a demanda."
        />

        <InfraAws
          title="Performance"
          description="Servidores rápidos garantindo estabilidade e velocidade."
        />

        <InfraAws
          title="Segurança"
          description="Proteção avançada para seus dados e sistemas."
        />
      </div>

      <button>Contratar Serviço</button>
    </div>
  );
}

export default Servico;