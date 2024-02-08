import axios from "axios";
import Swal from "sweetalert2";

const ProductHome = ({ product }) => {
    const {
        image,
        productName,
        price,
        discountRate,
        shippingCharge,
        color,
        size,
        active
    } = product;

    const handleAddToCart = (product) => {
        const cartProduct = {
            image,
            productName,
            price,
            discountRate,
            shippingCharge,
            color,
            size
        }
        axios.post('http://localhost:5000/cart', cartProduct)
            .then(response => {
                if (response.data.insertedId) {
                    // refetch();
                    Swal.fire({
                        icon: "success",
                        title: "Item is added to the cart!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Product is already in cart!",
                });
            });
    }

    return (
        <div>
            <div className="card rounded-lg bg-base-100 shadow-xl group relative">
                <div className="group-hover:flex hidden h-full w-full absolute bg-white text-red-500 justify-center items-center rounded-xl">
                    <button onClick={() => handleAddToCart(product)} className="btn btn-warning">Add to Cart</button>
                </div>
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="w-[500px] h-[200px] rounded-xl" />
                </figure>
                <div className="m-3 py-3">
                    <h2 className="card-title">{productName}</h2>
                    <div className="w-full flex justify-between items-center pt-5">
                        <p>BDT {price}/-</p>
                        <p className="p-1 bg-yellow-200 rounded-lg text-black text-right">{discountRate}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductHome;