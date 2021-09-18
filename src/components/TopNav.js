import "../styles/topNav.css";

const TopNav = () => {
  return (
    <div className="topnav-container">
      <div className="navigation-container">
        <div className="brand-logo">
          <img
            src="https://cdn.dsmcdn.com/web/logo/ty-logo.svg"
            alt="trendyol logo"
          />
        </div>
        <div className="navigation-item-list">
          <div className="navigation-item">
            <button href="#">Hesabım</button>
          </div>
          <div className="navigation-item">
            <button href="#">Favorilerim</button>
          </div>
          <div className="navigation-item" id="basket-item">
            <button href="#">Sepetim</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
