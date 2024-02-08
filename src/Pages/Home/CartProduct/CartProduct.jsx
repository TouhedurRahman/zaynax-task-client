import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const CartProduct = ({ product, newCart, setNewcart }) => {
    const { _id, image, productName, color, size, price, shippingCharge } = product;
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        const currentItem = newCart.find(item => item._id === _id);
        // console.log(newCart);
        const restItem = newCart.filter(item => item._id !== _id);
        currentItem.quantity = currentItem.quantity + 1;
        setNewcart([...restItem, currentItem]);
    };

    // console.log(newCart);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            const currentItem = newCart.find(item => item._id === _id);
            // console.log(newCart);
            const restItem = newCart.filter(item => item._id !== _id);
            currentItem.quantity = currentItem.quantity - 1;
            setNewcart([...restItem, currentItem]);
        }
    };

    return (
        <>
            <div className="flex justify-start items-center m-2 bg-white rounded-lg boder bodered">
                <div className="avatar p-3">
                    <div className="w-24 rounded">
                        <img src={image} />
                    </div>
                </div>
                <div className="w-full flex flex-col p-5">
                    <div className="w-full flex justify-between items-center mb-5">
                        <p>{productName}</p>
                        <button className="focus:outline-none">
                            <FaTrash className="text-red-500" />
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-[200px]">
                            <div className="flex justify-between items-center">
                                <p>Color: {color}</p>
                                <p>size: {size}</p>
                            </div>
                            <p>Product price: {price}</p>
                        </div>
                        <div>
                            <p>Shipping Method: MES</p>
                            <p>Shipping Charge: {shippingCharge}</p>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <p className="mr-2">Quantity:</p>
                                <button onClick={() => handleDecrement()} className="bg-gray-200 px-2 py-1 rounded-l">
                                    -
                                </button>
                                <input type="number" value={quantity} className="w-12 text-center" readOnly />
                                <button onClick={() => handleIncrement()} className="bg-gray-200 px-2 py-1 rounded-r">
                                    +
                                </button>
                            </div>
                            <p>Total Price: {price * quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProduct;