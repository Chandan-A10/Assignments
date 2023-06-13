const Product=({name,image,price}) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </div>
  );
};

export default Product;