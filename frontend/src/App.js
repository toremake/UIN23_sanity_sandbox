import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductPage from './components/ProductPage';
import Products from './components/Products';

function App() {
  return (
    <Routes>
      <Route index element={<Products />} />
      <Route path=":slug" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
