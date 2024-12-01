const Product = ({ imgSrc, name, price, link }) => (
  <div className="product-box">
    <img src={imgSrc} alt={name} />
    <h5>{name}</h5>
    <p>{price}</p>
    {link ? (
      <a href={link}>
        <button>Buy</button>
      </a>
    ) : (
      <button>Buy</button>
    )}
  </div>
);

export default Product;
