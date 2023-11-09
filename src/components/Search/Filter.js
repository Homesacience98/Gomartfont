import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function Filter({ applyFilters }) {
  const [filters, setFilters] = useState({
    gender: '',
    category: '',
    color: '',
    group: '',
    brand: '',
    minPrice: '',
    maxPrice: '',
  });
  useEffect(() => {
    applyFilters(filters);
  }, [filters, applyFilters]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
    
  };
    const handlePriceChange = (values) => {
    setFilters({
      ...filters,
      minPrice: values[0],
      maxPrice: values[1],
    });
  };

  const handleApplyFilters = () => {
    applyFilters(filters);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <label>Gender:</label>
          <select className="form-select" name="gender" value={filters.gender} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="U">Unisex</option>
            <option value="B">Boy</option>
            <option value="G">Girl</option>
            <option value="W">Watches</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>Group:</label>
          <select className="form-select" name="category" value={filters.category} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="B">Black</option>
            <option value="W">White</option>
            <option value="N">New</option>
            <option value="N">None</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>Color:</label>
          <select className="form-select" name="color" value={filters.color} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="BLACK">Black</option>
            <option value="WHITE">White</option>
            <option value="NEON">Neon</option>
            <option value="RED">Red</option>
            <option value="BLUE">Blue</option>
            <option value="BROWN">Brown</option>
            <option value="YELLOW">Yellow</option>
            <option value="GREY">Grey</option>
            <option value="PINK">Pink</option>
            <option value="GREEN">Green</option>
            <option value="ORANGE">Orange</option>
            <option value="PURPLE">Purple</option>
            <option value="N">None</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>Category:</label>
          <select className="form-select" name="group" value={filters.group} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="SHIRT">Shirt</option>
            <option value="TROUSER">Trouser</option>
            <option value="SHORTS">Shorts</option>
            <option value="SNEAKER">Sneaker</option>
            <option value="CAP">Cap and Hats</option>
            <option value="HOODIE">Hoodie and Sweaters</option>
            <option value="TSHIRT">T-Shirt</option>
            <option value="JERSEY">Jersey</option>
            <option value="CAP">Cap</option>
            <option value="BELT">Belt</option>
            <option value="SOCKS">Socks</option>
            <option value="WATCHES">Watches</option>
            <option value="BAGS">Bags</option>
            <option value="N">None</option>
          </select>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-3">
          <label>Brand:</label>
          <select className="form-select" name="brand" value={filters.brand} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Gucci">Gucci</option>
            <option value="Nike">Nike</option>
            <option value="Hublot">Hublot</option>
            <option value="Northface">Northface</option>
            <option value="Ellesse">Ellesse</option>
            <option value="Balenciaga">Balenciaga</option>
            <option value="vincero">Vincero</option>
            <option value="Vinchigo">Vinchigo</option>
            <option value="Tommy Hilfiger">Tommy Hilfiger</option>
            <option value="Jersy">Jersy</option>
            <option value="Converse">Converse</option>
            <option value="Reebok">Reebok</option>
            <option value="Adidas">Adidas</option>
            <option value="Puma">Puma</option>
            <option value="Drm">Dr Martens</option>
            <option value="Keppa">Keppa</option>
            <option value="Palace">Palace</option>
            <option value="Metalica">Metalica</option>
            <option value="Under">Under</option>
          </select>
        </div>
        <div className="col-md-4">
        <label>Price Range:</label>
          <div className="input-group container">
        
          <Slider
          range
          min={1.00}
          max={150000.00} 
          value={[filters.minPrice, filters.maxPrice]}
          onChange={handlePriceChange}
          trackStyle={{ backgroundColor: 'black', height: 2 }}
          handleStyle={[
            { backgroundColor: 'red', border: '2px solid red' },
            { backgroundColor: 'green', border: '2px solid green' },
          ]}
          
        />
        <div className=" container d-inline">
          <span style={{color:'red'}} >₦{filters.minPrice}</span>
        <br/>  <span className='ml-4 ' style={{float:'right',marginTop:'-20px',color:'green'}}>₦{filters.maxPrice}</span>
        </div>
          </div>        
           </div>
        <div className="col-md-3 mt-4">
          <button className="btn btn-dark" onClick={handleApplyFilters}>
           <i class="fa fa-gear fa-spin" ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
