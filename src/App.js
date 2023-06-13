import React,{useState,useEffect} from 'react';
import Product from './components/products';
import productsData from './data/product.json';
import './styles/App.scss';

const App=()=>{
  const [products,setProducts]=useState([]);
  const [searchTerm,setSearchTerm]=useState('');

  //setting products with data
  useEffect(()=>{
    setProducts(productsData);
  }, []);

  //Search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  //searching for product
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-left">
          <h1>Available Products</h1>
        </div>
        <div className="navbar-right">
          <input type="text" placeholder="Search by name" onChange={handleSearch}
          />
        </div>
      </nav>
      <div className="product-list">
        {filteredProducts.length?filteredProducts.map((product,index)=>(
          <Product key={index} name={product.name} image={product.image} price={product.price}/>
        )):(<p>No Product found</p>)}
      </div>
    </div>
  );
};

export default App;
