import "../styles/modal.css";

const ModalWithoutPortal = ({ isOpen, setIsOpen, productName = "" }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h1>{productName}</h1>
      </div>
      <button onClick={() => setIsOpen(false)}>Close modal</button>
    </div>
  );
};

export default ModalWithoutPortal;
