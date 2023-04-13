import cart from '../images/legocart.svg';
import CartProductLine from './CartProductLine';

export default function Cart({toggleCart, cartProducts, setCartProducts}) {
    return (
        <>
        <figure id="cart" role="button" onClick={toggleCart}>
            <span className="label">0</span>
            <img src={cart} alt="Handlekurv" />
        </figure>
        <section id="cartview" className="hidden">
            <h3>Din handlevogn</h3>
            <ul>
                {cartProducts?.length > 0 ? cartProducts?.map((cp, i) => <CartProductLine key={i} cp={cp} i={i} />) : <li>Din handlevogn er tom.</li>}
                
            </ul>
            <p>Totalt: Kr. <span id="total">0</span>,-</p>
        </section>
        </>
    )
}