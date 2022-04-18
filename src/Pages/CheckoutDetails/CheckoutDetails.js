import React from "react";
import { useParams } from "react-router-dom";

const CheckoutDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>This is checkout :{serviceId}</h1>
    </div>
  );
};

export default CheckoutDetails;
