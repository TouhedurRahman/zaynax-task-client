import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import CartProduct from "../CartProduct/CartProduct";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import usePromoCodes from "../../../hooks/usePromoCodes";

const Cart = () => {
    const [cart, refetch] = useCart();
    const [promocodes] = usePromoCodes();
    const [discountPrice, setDiscountPrice] = useState(0);

    const [newCart, setNewcart] = useState([]);
    const [promoCode, setPromoCode] = useState('');
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [errorMsg, seterrorMsg] = useState(false);
    const [errorPromoMsg, setErrorPromoMsg] = useState("");

    useEffect(() => {
        setNewcart(
            cart.map(item => {
                return {
                    _id: item._id,
                    price: item.price,
                    quantity: 1,
                    shippingCharge: parseFloat(item.shippingCharge)
                }
            })
        )
    }, [cart])

    const calculateTotalPrice = newCart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    const calculateShippingCharge = newCart.reduce((total, product) => {
        return total + product.shippingCharge;
    }, 0);

    // const handleApplyPromoCode = () => {
    //     console.log('Promo code applied: ', promoCode);
    // };
    const handleApplyPromoCode = () => {
        const foundPromoCode = promocodes.find(code => code.promoCode === promoCode);

        if (foundPromoCode) {
            const discountRate = foundPromoCode.discountRate;

            const discount = ((calculateTotalPrice + calculateShippingCharge) * (discountRate / 100)).toFixed(2);
            setDiscountPrice(discount);

        } else {
            // Promo code not found
            setErrorPromoMsg("Inavlid Promo Code")
        }
    };

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value);
    };

    const handleCheckout = () => {
        if (!termsAgreed) {
            seterrorMsg(true);
        } else {
            const orderedInfo = {
                totalPrice: ((calculateTotalPrice + calculateShippingCharge) - discountPrice),
                status: "pending"
            }
            axios.post("http://localhost:5000/orders", orderedInfo)
                .then(response => {
                    if (response.data.insertResult.insertedId && response.data.deleteResult.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            icon: "success",
                            title: "Congrats! Order successfully placed.",
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
        }
    };

    return (
        <div className="m-5 ms-10">
            <div>
                <Link to="/" className="btn btn-warning rounded-full">Go Back</Link>
            </div>
            <div className="flex flex-between m-5">
                {
                    cart.length > 0
                        ?
                        <>
                            <div className="w-[75%] border-black">
                                <div>
                                    {
                                        cart.map(product => <CartProduct
                                            key={product._id}
                                            product={product}
                                            newCart={newCart}
                                            setNewcart={setNewcart}
                                            refetch={refetch}
                                        ></CartProduct>)
                                    }
                                </div>
                                <div className="flex justify-between items-center m-2 mt-5">
                                    {/* Toggle button */}
                                    <div>
                                        {
                                            errorMsg &&
                                            <>
                                                <p className="text-red-800 font-mono">You must agree to the terms and conditions</p>
                                            </>
                                        }
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" checked={termsAgreed} onChange={() => setTermsAgreed(!termsAgreed)} />
                                            <span>I agree to the terms and conditions</span>
                                        </label>
                                    </div>
                                    {/* Checkout button */}
                                    <button onClick={handleCheckout} className="bg-yellow-400 text-black px-4 py-2 rounded">Checkout</button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="w-[75%] flex justify-center items-center text-4xl font-serif font-bold">
                                <p>
                                    You have no product in cart.
                                </p>
                            </div>
                        </>
                }

                <div className="w-[25%] m-5 p-2 border border-2 border-dotted rounded-lg">
                    <div className="text-center font-extrabold uppercase font-serif border border-b-black border-dotted p-5 rounded-lg">
                        Order Summary
                    </div>
                    <div>
                        <div className="flex justify-between items-center my-3">
                            <p>Subtotal </p>
                            <p>৳ {calculateTotalPrice}/-</p>
                        </div>
                        <div className="flex justify-between items-center my-3">
                            <p>Discount </p>
                            <p>৳ {discountPrice}/-</p>
                        </div>
                        <div className="flex justify-between items-center my-3">
                            <p>Shipping Charge </p>
                            <p>৳ {calculateShippingCharge}/-</p>
                        </div>
                        <div className="flex justify-between items-center my-3">
                            <p>Wallet Dabit </p>
                            <p>৳ 0/-</p>
                        </div>
                        <div className="flex justify-center items-center bg-gray-200 p-2 rounded-lg">
                            <input
                                type="text"
                                value={promoCode}
                                onChange={handlePromoCodeChange}
                                placeholder="Enter Promo Code"
                                className="mr-2 p-2 border border-gray-400"
                                required
                            />
                            <button onClick={handleApplyPromoCode} className="bg-blue-500 text-white px-4 py-2 rounded">
                                Apply
                            </button>
                        </div>
                        {
                            errorPromoMsg &&
                            <>
                                <p className="text-red-800 font-mono">Invalid or expired promocode.</p>
                            </>
                        }
                        <div className="flex justify-between items-center my-3">
                            <p>Total Payable </p>
                            <p>৳ {(calculateTotalPrice + calculateShippingCharge) - discountPrice}/-</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;