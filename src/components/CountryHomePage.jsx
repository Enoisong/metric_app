import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import './myStyle/Style.css';
import countryMap from './image/bb.png';
import bannarImage from './image/bc.jpg';

const CountryHomepage = () => {
  const { myCountryData } = useSelector((store) => store.country);

  const [searchinCountry, setsearchCountry] = useState('');

  const handleMyCountry = (event) => {
    setsearchCountry(event.target.value);
  };

  const filterData = myCountryData.filter((item) => (
    item.name.toLowerCase().includes(searchinCountry.toLowerCase())
  ));

  return (
    <>
      <Header />
      <div className="search-cont">
        <img src={bannarImage} alt="World Map" className="world-img" />
      </div>
      <input type="text" value={searchinCountry} onChange={handleMyCountry} placeholder="&#x1F50D; Search Country Here" className="search-input" />
      <div className="status-bar"><h2 className="country-status">Stats by Country</h2></div>
      <div className="container">
        {filterData.map((item, index) => (
          <Link
            to={`/countries/${item.name}`}
            key={item.name}
            className={`small-container ${index === 1 || index === 2
                || index === 5 || index === 6 || index === 9 || index === 10 ? 'active' : ''}`}
          >
            <img src={countryMap} alt={item.name} className="country-map" />
            <div className="country-info">
              <h2 className="country-name">{item.name}</h2>
              <h2 className="country-population">{item.population}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CountryHomepage;
