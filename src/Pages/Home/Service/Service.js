import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateTocheckoutDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card ">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h3>{price}</h3>
          <p className="card-text">{description}</p>
          <button
            onClick={() => navigateTocheckoutDetail(id)}
            className="btn btn-primary"
          >
            BOOK {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
