const ProductCard = ({prod}) => {
    return (
        <article>
            <a href={prod?.slug}>
                <h2>{prod?.product_title}</h2>
            </a>
        </article>
    )
}

export default ProductCard