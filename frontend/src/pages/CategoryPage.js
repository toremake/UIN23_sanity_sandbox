import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCategory } from "../lib/sanity/categoryServices"
import ProductCard from "../components/ProductCard"

export default function CategoryPage({addToCart}) {
    const {category} = useParams()

    //lager en state for å lagre kategori (og senere produkter)
    const [catProds, setCatProds] = useState(null)

    //Forløse promise fra fetchCategory-service:
    async function getCategory(category) {
        const data = await fetchCategory(category)
        setCatProds(data[0])
    }

    //Kjørn getCategory når komponenten lastes:
    useEffect(() => {
        getCategory(category)
    }, [category])

    console.log(catProds)

    return (
        <>
        <h1>{catProds?.category_title}</h1>
        <section className="productlist">
        {catProds?.products.map((p,i) => <ProductCard productinfo={p} key={i} addToCart={addToCart} />)}
            </section>
        </>
    )
}