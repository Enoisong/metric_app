import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Homepage from './components/CountryHomePage';
import { countriesItems } from './Redux/country/countrySlice';
import DatailePage from './components/CountryDetailPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countriesItems());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/countries/:fName" element={<DatailePage />} />
      </Routes>

    </>

  );
}
export default App;
