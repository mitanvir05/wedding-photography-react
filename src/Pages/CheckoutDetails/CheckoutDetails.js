import React from "react";
import { Link, useParams } from "react-router-dom";

const CheckoutDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>This is :{serviceId}</h1>

      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutDetails;
