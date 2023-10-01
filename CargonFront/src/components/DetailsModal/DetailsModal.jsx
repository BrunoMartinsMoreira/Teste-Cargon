import "./Modal.css";

const DetailsModal = ({ product_name, details, toggleModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Detalhes do produto: {product_name}</h2>
        <p> {details} </p>
        <button onClick={toggleModal}>Fechar Modal</button>
      </div>
    </div>
  );
};

export default DetailsModal;
