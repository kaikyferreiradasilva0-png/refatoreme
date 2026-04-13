import "./InfraAws.css";

function InfraAws({ title, description }) {
  return (
    <div className="infra-card">
      <h3 className="infra-title">{title}</h3>
      <p className="infra-description">{description}</p>

      <button className="infra-btn">Saiba mais</button>
    </div>
  );
}

export default InfraAws;