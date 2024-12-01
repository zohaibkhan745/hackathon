import Header from "./Header";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import image4 from "./image4.jpeg";

const Products = () => (
  <>
    <section id="products" className="section-product">
      <Product imgSrc={image1}
       name="Product 1" price="$10.00" link="details" />
      <Product imgSrc={image2}
       name="Product 2" price="$20.00" />
      <Product imgSrc={image3} name="Product 3" price="$30.00" />
      <Product imgSrc={image4} name="Product 4" price="$40.00" />
    </section>
    </>
  );

export default Products;