import {client} from './client'

export const fetchAllProducts = async () => {
    const data = await client.fetch(`*[_type == "products"]`)
    return data
}