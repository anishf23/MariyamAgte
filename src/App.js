import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import HomeScreen from './Screen/HomeScreen';
import Footer from './Components/Footer';
import NewArrivalScreen from './Screen/NewArrivalScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './Screen/ProductDetail';
import ContactPage from './Screen/ContactPage';
import CategoriesList from './Screen/CategoriesList';
import ItemListScreen from './Screen/ItemListScreen';
import AboutPage from './Screen/AboutPage';

function App() {
  return (
    <>
      <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/new-arrivals" element={<NewArrivalScreen />} />
          <Route path="/product/:productId" element={<ProductDetail />} /> {/* Route for product detail page */}
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/itemlist" element={<ItemListScreen />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage />} />
          
        </Routes>
        <Footer />
      </>
    </Router>

    </>
  );
}

export default App;
