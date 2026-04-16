import "./InfraAws.css";

function InfraAws({ title, description }) {
  return (
    <div className="infra-card">
      <h3 className="infra-title">{title}</h3>
      <p className="infra-description">{description}</p>
      <ul>
        <li className="infra-benefit">Benefício 1</li>
        <li className="infra-benefit">Benefício 2</li>
        <li className="infra-benefit">Benefício 3</li>
      </ul>

      <button className="infra-btn">Saiba mais</button>
    </div>
  );
}

export default InfraAws;