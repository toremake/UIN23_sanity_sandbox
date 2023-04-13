export default function CartProductLine({cp, i}) {

    function changeQuantity(index, amount) {
        console.log(index, amount)
    }
    function deleteProduct(index) {
        console.log(index)
    }

    return (
        <li id={`prod-${i}`}>
            <span className='title'>{cp.title}</span>
            <span className='price'>{cp.price},-</span>
            <span className='quantity'>
                <button onClick={() => {changeQuantity({i}, -1)}}>-</button>
                <input type="number" value={cp.quantity} />
                <button onClick={() => {changeQuantity({i}, 1)}}>+</button>
            </span>
            <span className='delete' onClick={() => {deleteProduct({i})}}>X</span>
        </li>
    )
}