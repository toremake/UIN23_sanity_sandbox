import { Link } from "react-router-dom";

export default function ProductCard ({productinfo, addToCart}) {
    return (
        <article className="product">
            <img style={{maxWidth: "400px"}} alt={`Produktbilde av ${productinfo?.product_title}`} src={!productinfo?.imageURL ? `https://placehold.jp/18px/FFD700/000000/400x600.png?text=Picture%20missing` : productinfo?.imageURL} />
            <h2>{productinfo.product_title}</h2>
            <p className="price">Kr. {productinfo.price}</p>
            <p>
                <Link to={`/${productinfo?.slug?.current}`} className="linkButton">Les mer</Link>
                <button onClick={() => {addToCart({id: productinfo?._id, title: productinfo.product_title, price: productinfo.price})}}>Legg i handlekurv</button>
            </p>
        </article>
    )
}