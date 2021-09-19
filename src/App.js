import TopNav from "./components/TopNav";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <div className="container">
      <TopNav />
      <ProductDetail productName="Pubg" />
    </div>
  );
};

export default App;
