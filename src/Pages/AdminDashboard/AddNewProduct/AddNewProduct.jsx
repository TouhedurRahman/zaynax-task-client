import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;

const AddNewProduct = () => {
    const { handleSubmit, control, register, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const handleAddProduct = (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                const imgURL = imgResponse.data.display_url;
                const { productName, price, discountRate, shippingCharge, color, size, active } = data;
                const newItem = {
                    image: imgURL,
                    productName,
                    price: parseFloat((price) - (price * (discountRate / 100))),
                    discountRate,
                    shippingCharge,
                    color,
                    size: size.toUpperCase(),
                    active
                }

                axios.post('http://localhost:5000/products', newItem)
                    .then(data => {
                        if (data.data.insertedId) {
                            reset();
                            Swal.fire({
                                icon: "success",
                                title: "New Product successfully added!",
                                showConfirmButton: false,
                                timer: 1000
                            });
                        }
                    })
            })
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 mt-8 rounded shadow-md">
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Image Upload
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="file"
                        {...register("image", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Product Name
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="text"
                        {...register("productName", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Product Price (Before Discount)
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="number"
                        step="0.01"
                        {...register("price", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Discount Rate (%)
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="number"
                        step="0.01"
                        {...register("discountRate", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Shipping Charge
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="number"
                        step="0.01"
                        {...register("shippingCharge", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Color
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="text"
                        {...register("color", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Size
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="text"
                        {...register("size", { required: true })}
                    />
                </div>

                <div className="flex justify-between items-center mb-4">
                    <label htmlFor="active" className="block mb-2 font-bold text-gray-700">
                        Active?
                    </label>
                    <div className="flex items-center">
                        <Controller
                            control={control}
                            name="active"
                            defaultValue={false}
                            render={({ field }) => (
                                <>
                                    <input
                                        type="checkbox"
                                        id="active"
                                        className="hidden"
                                        {...field}
                                    />
                                    <label
                                        htmlFor="active"
                                        className={`cursor-pointer w-12 h-6 rounded-full ${field.value ? 'bg-blue-500' : 'bg-gray-400'
                                            }`}
                                    >
                                        <span className={`block w-6 h-6 rounded-full bg-white shadow-md transform ${field.value ? 'translate-x-6' : ''}`}></span>
                                    </label>
                                </>
                            )}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-center rounded-lg">
                    <button
                        type="submit"
                        className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddNewProduct;