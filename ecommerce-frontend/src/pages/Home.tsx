import { Link } from "react-router-dom";
import ProductCard from "../components/Product-Card";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Product
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard productId="kuwar" name="singh" price={422} stock={435} handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/618d5bS2lUL._SX466_.jpg" />
      </main>
    </div>
  );
};

export default Home;
