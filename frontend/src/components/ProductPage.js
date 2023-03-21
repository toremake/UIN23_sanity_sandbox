import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProduct } from "../lib/Sanity/productServices"
import imageUrlBuilder from '@sanity/image-url'
import { client } from "../lib/Sanity/client"

const ProductPage = () => {
    //States and params
    const [prodInfo, setProdInfo] = useState(null)
    const {slug} = useParams()
    //Image builder
    const builder = imageUrlBuilder(client)
    function urlFor(source) {
        return builder.image(source)
    }
    //Fetch the product from Sanity
    const getProduct = async (slugToFetch) => {
        const data = await fetchProduct(slugToFetch)
        setProdInfo(data[0])
    }

    useEffect(() => {
        getProduct(slug)
    }, [slug])

    console.log(prodInfo)

    //Return HTML and product information
    return (
        <>
        <h1>{prodInfo?.product_title}</h1>
        {prodInfo?.product_image ? <img src={urlFor(prodInfo.product_image).width(400).url()} alt={`Produktbilde av ${prodInfo.product_title}`} /> : null}
        <p>Pris: {prodInfo?.price}</p>
        <p>Slug: {slug}</p>
        </>
    )
}

export default ProductPage