import "../App.css";
import Card from "./layout/Card";
import ProductDetails from "./ProductDetails";

export default function PropsExercises() {
  return (
    <div className="cards-container">
      <Card titulo="Lista de produtos" color="#21d">
        <ProductDetails name="Meia" price={10.0} discount={0.98} />
        <ProductDetails name="Camisa" price={54.9} discount={11.45} />
        <ProductDetails name="Calça" price={136.88} />
      </Card>
    </div>
  );
}
