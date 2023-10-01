import { BsFillBagFill } from "react-icons/bs";
import { useState } from "react";
import DetailsModal from "../DetailsModal/DetailsModal";

import "./Card.css";

const Card = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const formatPrice = (price) => price.toString().replace(".", ",");

  const toggleDetailsModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <DetailsModal
          product_name={product.name}
          details={product.details}
          toggleModal={toggleDetailsModal}
        />
      )}
      <section className="card" onClick={toggleDetailsModal}>
        <h3 className="card-title">{product.name}</h3>
        <img src={product.image_url} alt={product.name} className="card-img" />
        <div className="card-details">
          <section className="card-price">
            <div className="price">R$ {formatPrice(product.price)}</div>
          </section>
          <div className="bag">
            <div className="sizes_container">
              <span>Tamanhos disponíveis:</span>
              {product.available_sizes.map((item, index) => (
                <div className="size_item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
