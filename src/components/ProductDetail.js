import "../styles/productDetail.css";
import { useState } from "react";
import ModalWithPortal from "./ModalWithPortal";
import ModalWithoutPortal from "./ModalWithoutPortal";

const ProductDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPortal, setIsOpenPortal] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleOpenPortal = () => {
    setIsOpenPortal(true);
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img
          src="https://cdn.dsmcdn.com/ty5/product/media/images/20200630/17/3677003/75617415/1/1_org_zoom.jpeg"
          alt="pubg logo"
        />
      </div>
      <div className="product-detail">
        <div className="product-title">Pubg Mobile 600+60 UC 1100000000175</div>
        <div className="product-seller">
          <span>Satıcı:</span> <a href="#">Epin Tower</a>
        </div>
        <div className="product-rate">
          <img
            src="https://cdn.dsmcdn.com/web/production/rating-and-review-small-star-orange.svg"
            alt="star"
          />
          <img
            src="https://cdn.dsmcdn.com/web/production/rating-and-review-small-star-orange.svg"
            alt="star"
          />
          <img
            src="https://cdn.dsmcdn.com/web/production/rating-and-review-small-star-orange.svg"
            alt="star"
          />
          <img
            src="https://cdn.dsmcdn.com/web/production/rating-and-review-small-star-orange.svg"
            alt="star"
          />
          <div className="product-rate-detail">
            <span className="product-rate-count">2672 Değerlendirme</span>
            <span className="product-qa-count">1 Soru & Cevap</span>
          </div>
        </div>
        <div className="product-price-container">
          <div className="product-original-price">88,90 TL</div>
          <div className="product-discounted-price">88,90 TL</div>
        </div>
        <div className="product-button-container">
          <button className="add-to-basket-button" onClick={handleOpenPortal}>
            Sepete Ekle (Portal)
          </button>
          <button className="add-to-basket-button" onClick={handleOpen}>
            Sepete Ekle (Portalsız)
          </button>
        </div>
      </div>
      <ModalWithPortal
        isOpenPortal={isOpenPortal}
        setIsOpenPortal={setIsOpenPortal}
        productName={"Pubg"}
      />
      <ModalWithoutPortal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        productName={"Pubg"}
      />
    </div>
  );
};

export default ProductDetail;
