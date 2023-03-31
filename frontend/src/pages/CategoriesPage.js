import {useEffect, useState} from "react"
import { fetchAllCategories } from "../lib/sanity/categoryServices"
import {Link} from "react-router-dom"

export default function CategoriesPage() {
    //lager en state for å lagre kategoriene
    const [cats, setCats] = useState(null)

    //kalle categoryService asynkront
    async function getCategories() {
        const data = await fetchAllCategories()
        setCats(data)
    }

    //kjøre getCategories når componenten lastes:
    useEffect(() => {
        getCategories()
    }, [])

    console.log(cats)

    return (
        <>
        <h1>Alle kategorier</h1>
        <ul>
            {cats?.map((c, i) => <li key={`c${i}`}><Link to={c.category_slug.current}>{c.category_title}</Link></li>)}
        </ul>
        </>
    )
}