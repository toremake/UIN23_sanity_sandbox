import './App.scss';
import { fetchAllProducts } from './lib/sanity/productServices';
import {useEffect, useState} from 'react'
import Frontpage from './pages/Frontpage';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import Layout from './components/Layout';
import CampaignManagement from './pages/CampaignManagement';

function App() {

  const [prods, setProds] = useState(null)
  const [cartProducts, setCartProducts] = useState([])

  const getProducts = async () => {
    const data = await fetchAllProducts()
    setProds(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  /*
   * Funksjon for å legge til produkter i handlevogn
   * Må ligge i App for å være tilgjengelig i hele applikasjonen
   * tar imot en parameter: product
   * product er et object med nøklene id, title og price
   */
  function addToCart(product) {
    console.log(product.id + "Added to cart")
    setCartProducts((prev) => [...prev, product])
  }

  //Testutskrift
  console.log(cartProducts)

  return (
    <Routes>
      <Route element={<Layout cartProducts={cartProducts} setCartProducts={setCartProducts} />}>
        <Route index element={<Frontpage products={prods} />} />
        <Route path=":slug" element={<ProductPage addToCart={addToCart} />} />
        <Route path="kategori">
          <Route index element={<CategoriesPage />} />
          <Route path=":category" element={<CategoryPage addToCart={addToCart} />} />
        </Route>
        <Route path="kampanjeadmin" element={<CampaignManagement />} />
      </Route>
    </Routes>
  );
}

export default App;
