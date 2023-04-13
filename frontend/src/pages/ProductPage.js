import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProduct } from "../lib/sanity/productServices"

export default function ProductPage({addToCart}) {

    //Bruker useParams for å hente parameter fra URL (produkt-slug)
    const {slug} = useParams()

    //Gjøre klar en state for å lagre returnert data fra Sanity
    const [product, setProduct] = useState(null)

    //Løse opp promise, og få ut data fra Sanity
    const getProduct = async (slug) => {
        const data = await fetchProduct(slug)
        setProduct(data[0])
    }

    //Kjøre getProduct når komponentet lastes
    useEffect(() => {
        getProduct(slug)
    },[slug])

    //Test om vi har fått innhold:
    console.log(product)

    return (
        <article className="product-single">
            <img style={{maxWidth: "400px"}} alt={`Produktbilde av ${product?.product_title}`} src={!product?.imageURL ? `https://placehold.jp/18px/FFD700/000000/400x600.png?text=Picture%20missing` : product?.imageURL} />
            <div className="info">
                <h1>{product?.product_title}</h1>
                <p>{product?.catname}</p>
                <p className="price">Kr. {product?.price}</p>
                <button onClick={() => {addToCart({id: product?._id, title: product.product_title, price: product.price})}}>Legg i handlekurv</button>
            </div>
        </article>
    )
}