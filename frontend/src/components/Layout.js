import { Link, Outlet } from "react-router-dom";
import logo from '../images/LD_logo.svg';
import { useEffect, useState } from "react";
import { fetchAllCategories } from "../lib/sanity/categoryServices";
import Cart from "./Cart";

export default function Layout({cartProducts, setCartProducts}) {
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

    //Handlevognfunksjonalitet
    function toggleCart() {
        document.querySelector("#cartview").classList.toggle("hidden")
    }

    return (
        <>
        <header>
            <img src={logo} alt="LEGO-dudes" />
            <Cart toggleCart={toggleCart} cartProducts={cartProducts} setCartProducts={setCartProducts} />
            <nav>
                {
                    cats?.map((c, i) => <Link key={i} to={`/kategori/${c.category_slug.current}`}>{c.category_title}</Link>)
                }
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer><Link to="/kampanjeadmin">Kampanjeadministrasjon</Link></footer>
        </>
    )
}