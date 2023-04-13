import { client } from "./client"

export const fetchAllCategories = async () => {
    const data = await client.fetch(`*[_type == "categories"]`)
    return data
}

export const fetchCategory = async (category) => {
    const data = await client.fetch(`
    *[_type == "categories" && category_slug.current == $category]
    {category_title, "products": 
      *[_type == "products" && category._ref == ^._id]
      {_id, product_title, price, slug, "imageURL":product_image.asset->url}
    }`,{category})
    return data
}