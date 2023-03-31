import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchCategory } from "../lib/sanity/categoryServices"

export default function CategoryPage() {
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
        {catProds?.products.map((p,i) => <p key={i}><Link to={`/${p.slug}`}>
            {p.product_title} NOK: {p.price},-</Link></p>)}
        </>
    )
}