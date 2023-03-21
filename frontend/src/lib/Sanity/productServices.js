import { client } from "./client";

export const fetchAllProducts = async () => {
    const data = await client.fetch(`*[_type == "products"]{product_title, price, "slug":slug.current, "image": product_image.asset->url} | order(product_title)`)
    return data
}

export const fetchProduct = async (slug) => {
    const data = await client.fetch(`*[_type == "products" && slug.current == $slug]{...}`, {slug})
    return data
}