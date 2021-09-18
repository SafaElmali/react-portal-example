import TopNav from "./components/TopNav";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="container">
      <TopNav />
      <ProductDetail productName="Pubg" />
      <ProductDetail productName="Pubg" />
    </div>
  );
}

export default App;
