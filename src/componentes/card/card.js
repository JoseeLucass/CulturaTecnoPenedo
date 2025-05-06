import React from 'react';

const Card = ({ image, alt, title, description, link }) => (
  <div className="card">
    <div className="card-header">
      <img src={image} alt={alt} className="card-img" />
    </div>
    <div className="card-body">
      <h2 className="card-titulo">{title}</h2>
      <p className="card-texto">{description}</p>
    </div>
    <div className="card-footer">
      <a href={link}>Ver Mais</a>
      <a  onClick={handleButtonClick}>Ir para RA</a>
    </div>
  </div>
);

const handleButtonClick = () => {
  window.location.href = "https://culturatecnopenedo-realidade-aumentada.vercel.app/"; 
};
export default Card;
