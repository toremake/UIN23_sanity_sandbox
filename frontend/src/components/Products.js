import {useEffect, useState} from 'react'
import { fetchAllProducts } from '../lib/Sanity/productServices'
import Product from './ProductCard'

const Products = () => {
    //Gjøre klar en state for produkter
    const [products, setProducts] = useState(null)
    
    //Hente produkter fra Sanity
    const getProducts = async () => {
        const data = await fetchAllProducts()
        setProducts(data)
    }

    //Kjøre uthenting av produkter ved sideinnlasting:
    useEffect(() => {
        getProducts()
    }, [])

    console.log(products)

    //Skrive dem ut som et produktkort
    return (
        <>
        <h1>Produkter</h1>
        {products?.map((prod, index) => <Product key={index} prod={prod} />)}
        </>
    )
}

export default Products