import "../styles/modal.css";
import { createPortal } from "react-dom";

const ModalWithPortal = ({
  isOpenPortal,
  setIsOpenPortal,
  productName = "",
}) => {
  if (!isOpenPortal) return null;

  return createPortal(
    <div className="modal-container">
      <div className="modal-header">
        <h1>{productName}</h1>
      </div>
      <button onClick={() => setIsOpenPortal(false)}>Close modal</button>
    </div>,
    document.getElementById("basket-item")
  );
};

export default ModalWithPortal;
