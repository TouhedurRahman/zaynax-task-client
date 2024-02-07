
const AdminProduct = ({ product }) => {
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

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
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

export default AdminProduct;